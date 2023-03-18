import React from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   const [id, setId] = React.useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <div className={styles.divCard}>
         {
            <>
            <input className={styles.input} type='search' onChange={handleChange}/>
            <button className={styles.button} onClick={() => {
               props.onSearch(id);
               }}>Buscar</button> 
            </>
      }
      </div>
   );
}
