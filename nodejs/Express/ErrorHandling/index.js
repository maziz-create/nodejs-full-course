const express = require('express');
const app = express(); //constructor için.

//routes
const aboutUs = require('./routes/aboutus');
const profile = require('./routes/profile');

//helpers
const isLogin = require('./helpers/isLogin');
const errorHandling = require('./helpers/errorHandling');

app.set('view engine', 'pug');

app.use(isLogin);

app.use('/aboutus', aboutUs);
app.use('/profile', profile);

app.get('/', (req, res) => {
    res.send("Anasayfadasın!");
});

app.use(errorHandling);

app.listen(3000, () => console.log("Express 3000 portunu dinliyor!"));