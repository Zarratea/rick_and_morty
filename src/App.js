import React ,{useEffect,useState} from 'react';
import styles from './App.module.css'
import { Route, Routes ,useLocation,useNavigate} from "react-router-dom";
import NavBar from './components/NavBar/Navbar.jsx'
import About from './components/About/About.jsx'
import Cards from './components/Cards/Cards.jsx'
import Detail from './components/Detail/Detail.jsx'
import Form from './components/Form/Form.jsx'
import Favorites from './components/Favorites/Favorites.jsx';


function App () {
  const [users, setUsers] = React.useState([]);
  
  function onSearch(id) {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "40e6c05c8075.e53b064241447ec225c3";
    if (users.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => response.json())
    .then((data) => {
        if (data.name) {
          setUsers((users) => [...users, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
    }

  const navigate =useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '1password';
  function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    }
 }
 useEffect(() => {
  !access && navigate('/');
}, [access]);

  function onClose(id){
    setUsers(users.filter((char) => char.id !== id));
  }

  const {pathname}=useLocation();
 
  return (
    <div className={styles.divCard}>
    {/*<img className={styles.divImagentitulo} src='https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png' alt="" />*/ }
      <div className={styles.divSearchBar}>
        {pathname!=='/' && <NavBar onSearch={onSearch} />}
       
      </div>
      <Routes>

        <Route path='/home' element={ <Cards users={users} onClose={onClose}/>}/>   

        <Route path='/about' element={<About/>}/>

        <Route path='/favorites' element={<Favorites/>}/>

        <Route path='/' element={<Form login={login}/>}/>

        <Route path='/detail/:Id' element={<Detail/>}/>

      </Routes>


      
    </div>
  )
}

export default App


//Cuando este en /home se va a mostrar el element(componente) cards **linea 39**
//Cuando este en /about se va a mostrar el element(componente) about **linea 41**
//Cuando este en //detail/:detailId se va a mostrar el element(componente) detail**linea 43**