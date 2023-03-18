import React, { useState , useEffect } from "react";
import styles from './Card.module.css'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite , removeFavorite } from "../../Redux/actions";

function Card({
   name,
   species,
   gender,
   image,
   onClose,
   id,
   addFavorite,
   removeFavorite,
   myFavorites,
   }) {

   const [IsFav, setIsFav] =useState(false);

   const handleFavorite = () => {
      if(IsFav){
         setIsFav(false);
         removeFavorite(id);
      }else{
         setIsFav(true);
         addFavorite({
            name,
            species,
            gender,
            image,
            onClose,
            id,
            });
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.divCard}>
         {
         <>
         {
            IsFav ? (
         <button onClick={handleFavorite}>❤️</button>
          ) : (
         <button onClick={handleFavorite}>🤍</button>
          )
         }
         <div className={styles.divButtonClose}>
            <button onClick={()=>onClose(id)} className={styles.button}>X</button>
         </div>
         <Link to={`/detail/${id}`} ><h2 className={styles.nombre}>{name}</h2></Link>
         <h2 className={styles.especie}>Especie: {species}</h2>
         <h2 className={styles.especie}>Genero: {gender}</h2>
         <img className={styles.imagen} src={image} alt="" /> 
         </>
         }
      </div>
   );
}
const mapDispatchToProps =(dispatch) => {
   return {                       /* devuelve un objeto */
      addFavorite : (character) => {
         dispatch(addFavorite(character))
      },
      removeFavorite : (id) => {
         dispatch(removeFavorite(id))
      },
   };
};

const mapStateToProps = (state) => {
   return {
      myFavorites:state.myFavorites,
   }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Card);