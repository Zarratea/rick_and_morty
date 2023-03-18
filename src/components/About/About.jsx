import React from "react";
import styles from './About.module.css'


export default function About() {
    return (
       <>
       <div className={styles.divAbout}>
          < p className={styles.pAbout}>Hola mi nombre es Felipe Zarratea , esta es mi aplicacion de Rick And Morty,
           una de mis series animadas favoritas . En esta aplicacion podras buscar cada 
          uno de los personajes de Rick And Morty y ver sus caracteristicas.
          </p>
      </div>
       </>
    )
 }