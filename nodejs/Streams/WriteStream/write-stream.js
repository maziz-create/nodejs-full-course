//okunan dosyayı klonlamak => write-stream oluyor. read yapılma işleminde yapacağız bunu.
const fs = require('fs');
const video = 'video.mp4';

const readStream = fs.createReadStream(video); //tek tek iletecek karşıya, karşıya giden dataları gösterecek.
const writeStream = fs.createWriteStream('new.mp4'); //okuma işlemi sırasında üretilecek olan dosya

fs.stat(video, (err, data) => {
    const total = data.size; //dosyanın toplam boyutu.

    readStream.on('data', (chunk) => {
        console.log("Data okunuyor... Şu an okunan datanın boyutu => ", chunk.length);
    });

    readStream.pipe(writeStream); //write stream için yazılmış bir method.

    readStream.on('end', () => console.log("Okuma işlemi bitti!"));
});