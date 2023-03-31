const axios = require('axios');


const getCharDetail = (req , res) => {
    const {id}=req.params
    axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
        const objeto={
            name:response.data.name,
            image:response.data.image,
            gender:response.data.gender,
            species:response.data.species,
            status:response.data.status,
            origin:response.data.origin,
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

module.exports = getCharDetail;
