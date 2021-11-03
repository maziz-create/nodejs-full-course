const express = require('express');
const app = express(); //amacımız express modulünün constructorunu almak.

//   '/' ne? => expresste built-in olarak gelen routing yapısı var demiştik. anasayfayı temsil ediyor.
app.get('/' , (req, res) => {
    res.send('merhaba express!');
});

app.get('/hello' , (req, res) => {
    res.send('hello sayfası!');
});

app.listen(3000, () => console.log("Express server çalıştı! 3000 portu dinleniyor!"));