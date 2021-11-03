const express = require('express');
const app = express(); //connection for constructor

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen('3000', console.log("Express çalıştı, 3000 portu dinleniyor!"));