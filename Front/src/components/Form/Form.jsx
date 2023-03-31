import React from "react";
import Validation from "./validation";
import styles from './Form.module.css'

export default function Form(login){
    const [userData, setUserData] = React.useState({ username: '', password: '' ,});
    const [Errors, setErrors] = React.useState({ username: '', password: '' ,});

    const handleChange=(event)=>{
        const property=event.target.name;
        const value =event.target.value;
        setUserData({...userData , [property]:value})
        Validation({...userData , [property]:value},setErrors, Errors,event)      /*le paso el objeto para eliminar el delei*/
    }

    const submitHandler = (event) => {
        event.preventDefault();
        login.login(userData)
        console.log(login.login)
      };

    return(
        <form className={styles.divForm} onSubmit={submitHandler}>
            <div >
            <label htmlFor="username">Username: </label>
            <input 
            type="text" 
            name="username"
            value={userData.username}
            onChange={handleChange}
            />
            <span>{Errors.username}</span>
            </div>
            <div>
            <label htmlFor="password">Password: </label>
            <input 
            type="text"
            name="password" 
            value={userData.password}
            onChange={handleChange}
            />
            <span>{Errors.password}</span>
            </div>
            <button type="submit">Login</button>
        </form>
    )
}