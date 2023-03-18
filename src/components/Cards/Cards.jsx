import React from "react";
import Card from '../Card/Card';


export default function Cards({users,onClose}) {
   return (
      <>
      {users.map(({name,species,gender,image,id})=><Card 
      
      name={name} 
      species={species}
      gender={gender}
      onClose={onClose}
      image={image}
      id={id}
        />)}
      </>
   )
}
