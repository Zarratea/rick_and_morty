import React from "react";
import SearchBar from '../SearchBar/SearchBar';
import { Link } from "react-router-dom";
import styles from './NavBar.module.css'

export default function NavBar({onSearch}){
    return(
        <div className={styles.divNavBar}>

            <button className={styles.button}><Link to='/favorites' > FAV  </Link></button> 
            <button className={styles.button}><Link to='/about' > ABOUT  </Link></button> 
            <button className={styles.button}><Link to='/home' > HOME</Link></button> 
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}
