const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const db = require('./db');
const User = require('./models/users');

//configuracion de la plantilla
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../front/views'));

//ruta Inicio
app.get('/', (req, res) => {
    res.render('index.ejs',{
       nombrePagina: 'Inicio' 
    });
});

//Ruta Servicios
app.get('/servicios', (req, res) => {
    res.render('servicios.ejs', {
        nombrePagina: 'Servicios'
    });
});

//Ruta get all users
app.get('/all-user', (req, res) => {
    User.find().then((result) => {
        res.send(result);
    })
    .catch((error) => {
        console.log(error);
    });
});

//Ruta Add User
app.post('/add-user', (req, res) => {
    const user = new User({
        name: 'Carlos',
        edad: 52,
    });

    user.save().then((result) => {
        res.send('Usuario agregado a la base de datos');
    })
    .catch((error) => {
        console.log(error);
    });
});

//Ruta delete user
app.delete('/delete', (req, res) => {
    User.deleteOne({ _id: '639a0774b02524a8a466fbc9'}).then((result) => {
        res.send('Usuario eliminado de la base de datos');
    })
    .catch((error) => {
        console.log(error);
    });
})

//levantar el servidor
app.listen(PORT, (req, res) => {
    console.log(`Servidor Activo en port: ${PORT}`);
});

