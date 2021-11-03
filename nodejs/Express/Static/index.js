const express = require('express');
const app = express();

app.set('view engine', 'pug'); //view engine olarak pug kullanacağız.
app.use(express.static('public')); //css, script gibi statik dosyalar buradan alınacak.

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => console.log("Express çalıştı, 3000 dinleniyor!"));