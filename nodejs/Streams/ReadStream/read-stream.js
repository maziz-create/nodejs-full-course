const fs = require('fs');
const file = 'video.mp4';

const readStream = fs.createReadStream(file);

fs.stat(file, (err, data) => {
    if (err) throw err;

    const total = data.size;

    readStream.on('data', (chunk) => {
        console.log("Data iletildi, boyutu => ", chunk.length);
    });

    readStream.on('end', () => console.log("Okuma işlemi bitti! Dosyanın toplam boyutu => ", total));
})