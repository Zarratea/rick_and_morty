import { useSelector } from "react-redux";
import Card from '../Card/Card';


export default function Favorites() {
    const favorites=useSelector((state) => state.myFavorites)

   return (
      <>
      {favorites.map(({name,species,gender,image,id})=><Card 
      
      name={name} 
      species={species}
      gender={gender}
      image={image}
      id={id}
        />)}
      </>
   )
}