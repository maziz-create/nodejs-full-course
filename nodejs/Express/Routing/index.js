const express = require('express');
const app = express(); //express modülündeki constructoru alıyoruz.

//not: yapılan isteklere her zaman bir response fırlatmak zorundasın. yoksa program orda takılır kalır.

/*
get, post, put, delete, all(gelen bütün http isteklerini karşıla)
not: get ile karşılanan isteklerde isteğin sonlandırılması şart!. 
fakat belki expresste var olan app.send kendisi sonlandırıyordur..
*/

//aynı path ile farklı http methodları karşılanabilir.
app.get('/path1', (req, res) => {
    res.send('Hello Express!');
    res.end();
});
app.post('/path1', (req, res) => {
    res.send('Hello Express!');
    res.end();
});

//gönderilen bütün istekleri karşılayabilir.
app.all('pathAll', (req, res) => {
    vvc
    res.send("<strong></strong>");
});

//parametre karşılayabiliriz.
//   :  ifadesi değişebilir anlamına geliyor. Başta kullanılır.
//   ?  ifadesi olmasa da olur anlamına geliyor. Sonda kullanılır.
app.get('/user/:userId/:postId?', (req, res) => {
    // res.send(req.params);
    res.send(req.params.userId);
});

app.listen(3000, () => console.log("Express is working and listening 3000!"));