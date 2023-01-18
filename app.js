require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Carlos Jiménez',
        titulo: 'Atom Controles'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Carlos Jiménez',
        titulo: 'Atom Controles'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Carlos Jiménez',
        titulo: 'Atom Controles'
    });
});

app.get('*', (req, res) => {
    res.send('404 | Page not found');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});