const express = require('express');
const app = express();
const { db } = require('../firebase.js');

app.use(express.json());
app.disable('x-powered-by');

//let envio = require('../Controllers/Econtroller.js');


//codigo del servidor
// Agregar un nuevo documento a la colección de usuarios en firebase Cloud Firestore
/*app.post('/usuarios', (req, res) => {
    const nuevoUsuario = req.body;

    db.collection('usuario').where('cedula', '==', nuevoUsuario.cedula).get()
        .then(cedulaSnapshot => {
            if (!cedulaSnapshot.empty) {
                return res.status(400).json({ error: "La cédula ya está registrada" });
            }

            return db.collection('usuario').where('email', '==', nuevoUsuario.email).get();
        })
        .then(correoSnapshot => {
            if (!correoSnapshot.empty) {
                return res.status(400).json({ error: "El correo electrónico ya está registrado" });
            }

            return db.collection('usuario').add(nuevoUsuario);
        })
        .then(respuesta => {
            res.status(201).send({ id: respuesta.id });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: "Error al registrar solicitud" });
        });
});

// Verificar la existencia de una cédula
app.get('/verificar-cedula/:cedula', (req, res) => {
    db.collection('usuario').where('cedula', '==', req.params.cedula).get()
        .then(cedulaSnapshot => {
            res.json(!cedulaSnapshot.empty);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: "Error al verificar la cédula" });
        });
});

// Verificar la existencia de un correo electrónico
app.get('/verificar-email/:email', (req, res) => {
    db.collection('usuario').where('email', '==', req.params.email).get()
        .then(correoSnapshot => {
            res.json(!correoSnapshot.empty);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: "Error al verificar el correo electrónico" });
        });
});*/

module.exports = app;