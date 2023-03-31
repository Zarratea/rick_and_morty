
const express = require('express');
const server = express();
const router = require ('./routes/index.js')
const morgan = require("morgan");
const cors = require("cors");
const PORT = 3001;

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
 

server.use('/rickandmorty' , router);


server.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});