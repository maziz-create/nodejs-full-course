const express = require('express');
const app = express();

const signIn = require('./routes/signin');
const profile = require('./routes/profile');

/*
not: aşağıdaki app.use bir middleware'dir. her yerde çalışmasını istersen ilk parametresini boş bırakırsın.
Sadece bir route'da çalışsın istersen de app.use('routeIsmi', callbackFn); şeklinde yazarsın.
*/
app.use('/profile', (req, res, next) => {
    const isLogin = false;
    if (isLogin) res.next(); //giriş yapıldıysa bir sonraki route'a yönlendiriliyor.
    else res.send("Giriş yapmadınız1");
});

app.use('/profile', profile);
app.use('/signin', signIn); //not: bunu isLogin şeysinin üstüne yazdım ve isLogin şartı düzgün çalışmadı.

app.get('/', (req, res) => {
    res.send("Anasayfadasınız!");
    res.end();
});

app.listen(3000, () => console.log("3000 portu express ile dinleniyor!"));