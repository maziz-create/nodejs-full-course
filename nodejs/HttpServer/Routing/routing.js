const http = require('http');

const server = http.createServer((req, res) => {
    console.log("İstek var!");

    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });

    if (req.method === "GET") {
        if (req.url === '/')
            res.write("Index sayfasındasınız.");
        else if (req.url === '/iletisim')
            res.write("iletişim sayfasındasınız!");
        else
            res.write("böyle bir sayfa yok!");
    }

    res.end();
});

server.listen(3003, () => console.log("3003 dinleniyor!"));