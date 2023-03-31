const axios = require('axios');



const getCharById = (req,res) => {
    const URL='https://rickandmortyapi.com/api/character/'
    const {id}=req.params
    axios
    .get(`${URL}${id}`)
    .then((response) => {
        const objeto={
            name:response.data.name,
            image:response.data.image,
            gender:response.data.gender,
            species:response.data.species,
            id:response.data.id,
        };
        return objeto;
    })
    .then((objeto) => {
        res.writeHead(200,{ "Content-Type": "application/json" })
        res.end(JSON.stringify(objeto));
    })
    .catch((error)=>{
        res.writeHead(500,{ "Content-Type": "text/plain" })
        res.end(error.message)
    })
}   

module.exports = getCharById;