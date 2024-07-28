const express = require('express');
const app = express();
let cors = require('cors');
const bodyParser = require('body-parser');

app.disable('x-powered-by');

const corsOptions = {
    methods : ['GET', 'POST'],
    allowedHeaders : ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions)); // Habilita CORS para todos los dominios
app.use(bodyParser.json()); // Convierte el cuerpo de la petición en un objeto JSON
app.use(bodyParser.urlencoded({ extended: true })); // Convierte el cuerpo de la petición en un objeto JSON

//app.use(require('./Routes/Eroutes.js'));

app.listen('3000', () => {
    console.log('Server started on port 3000');
});