const express = require('express');
const app = express();

const signIn = require('./routes/signin');

app.use('/', signIn);

// app.get('/', (req, res) => {
//     res.send("Express workinn'");
// });

app.listen(3000, () => console.log("3000 dinleniyor express çalışıyor!"));