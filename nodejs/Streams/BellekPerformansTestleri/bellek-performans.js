//bir http serveri üretip 10MB'lik text dosyasını ekrana bastıracağız.

//önce stream olmadan önce bu işlemin ne kadar bellek yediğine bakacağız.

// const fs = require('fs');
// const http = require('http');
// const server = http.createServer();

// server.on('request', (req, res) => {
//     fs.readFile('10MB.txt', (err, data) => {
//         if (err) throw err;

//         res.end(data); //hata yoksa http servere bas datayı.
//     });
// });

// server.listen(3000);

//bellek kullanımı bi hayli fazla!





//----- Şimdi Stream ile dosya

// const fs = require('fs');
// const http = require('http');
// const server = http.createServer();

// server.on('request', (req, res) => {
//     const readStream = fs.createReadStream('10MB.txt');
//     readStream.pipe(res); //not: res ve req hem okunabilir hem de yazılabilir nesnelerdir.
//     //yani => biz res yazdığımızda 10MB'i response olarak yazıyor server dinleyicilerine.
// });

// server.listen(3001);

//bellek kullanımı çok daha az!