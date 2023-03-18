

export default function Validation (userData,setErrors,Errors,event) {

    if(event.target.name==='password'){
    if(!userData.password)setErrors({...Errors,password:'Campo vacio'});
    else {
        if(userData.password.length<6 || userData.password.length>10)setErrors({...Errors,password:'La contraseña debe ser de mas de 6 caracteres y menor a 10 caracteres'});
        else {
            setErrors({...Errors,password:''});
        } 
    }}
    if(event.target.name==='username'){
        if(!userData.username)setErrors({...Errors,username:'Ingrese el usuario'});
        else if (userData.username.length>35)setErrors({...Errors,username:'El usurio no puede tener mas de 35 caracteres'});
        else {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username))setErrors({...Errors,username:''});
        else {
            setErrors({...Errors,username:'Email invalido'});
        } 
    }}
}

