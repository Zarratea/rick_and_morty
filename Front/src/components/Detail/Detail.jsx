import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styles from './Detail.module.css'

export default function Detail(){
    const {Id}=useParams()
    const [Character, setCharacter] =useState([]);
    
    useEffect(() => {
        const URL_BASE = "http://localhost:3001/rickandmorty/detail/";
        fetch(`${URL_BASE}${Id}`)
          .then((response) => response.json())
          .then((char) => {
            setCharacter(char)
          })
      }, [Id]);
    return(
        <div className={styles.div}>
            <>
                <h1>Name: {Character.name}</h1>
                <h2>Status: {Character.status}</h2>
                <h2>Specie: {Character.species}</h2>
                <h2>Gender: {Character.gender}</h2>
                <h2>Origin: {Character.origin?.name}</h2>
                <img className={styles.image} src={Character.image} alt="" />
            </>
        </div>
    )
}