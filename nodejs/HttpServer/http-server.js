const http = require('http');

//req => request => serverimize yapılan isteğin detaylarını barındıran değişken
//res => response => serverimizden client'a gönderdiğimiz cevabın detaylarını barındıran değişken
const server = http.createServer((req, res) => {

    // neden 1 refreshte 2 kere logluyor => tarayıcılar favicon.ico'yu bulmak için bir istek atıyor. sekmelerdeki resimler için.
    console.log("Bir istekte bulunuldu!");

    // böyle şeyler de mümkün!:
    // console.log(req);
    // console.log(req.url); 
    // console.log(req.headers); 

    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }); // => dönüşün HTML olması için yapıyoruz. türkçe karakteri de algılıyor.
    res.write("<b>Merhaba</b> Dünya!"); // => dönüşte ne yazmak istiyorsak o.
    res.end(); //cevabı sonlandırmak zorundayız.

    //not: bazen bir şeyler yazdıktan sonra isteği direkt bitirebiliriz. örneği: 
    // res.end("<b>Res.end</b> ile yazıp bitirmek de mümkün!");
});

server.listen(8080, () => {
    console.log("dinleniyor!");
});