const express = require('express');
const app = express(); //connection for constructor

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');

    // peki ya pug dosyama bir değişken göndermek ve html dosyamda kullanmak istersem?
    // res.render('indexWithVariables', {
    //     name: 'Mehmet Aziz',
    //     surname: 'Algüllü',
    //     farkliKullanim: 'bununla birlikte =degiskenIsmi olarak sayfa başında kullanabiliyoruz.'
    // });
});

app.listen('3000', console.log("Express çalıştı, 3000 portu dinleniyor!"));