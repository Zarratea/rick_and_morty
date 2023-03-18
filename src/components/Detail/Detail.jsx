import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styles from './Detail.module.css'

export default function Detail(){
    const {Id}=useParams()
    const [Character, setCharacter] =useState([]);
    
    useEffect(() => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY = "40e6c05c8075.e53b064241447ec225c3";
        fetch(`${URL_BASE}/character/${Id}?key=${KEY}`)
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