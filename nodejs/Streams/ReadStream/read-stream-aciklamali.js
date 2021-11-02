const fs = require('fs');
const video = 'video.mp4';

const readStream = fs.createReadStream(video);
let progress = 0;

//karşıya ulaşan her bir veri bize bildirilecek.
//bir veri iletildiği an 'data' eventEmitter'ını yayımlar.
// readStream.on('data', (chunk) => {
//     // console.log("Bir veri geldi!");
//     console.log(chunk.length); // => o an ulaşmış olan datanın BYTE boyutunu gösterir. (tek bir paketin)

//     //paketin toplam boyutunu bu şekilde bulabiliriz.
//     //progress += chunk.length;
// });

// readStream.on('end', () => {
//     console.log("Veri okunması bitti.");

//     console.log("Toplam boyut => ", progress);
// });


// dosyanın boyutu şöyle de bulunabilir.

fs.stat(video, (err, data) => {
    const total = data.size; //progresste bulduğumuz değeri direkt alıyoruz.

    //diğer okuma işlemlerini burada yapabiliriz.

    readStream.on('data', (chunk) => {
        progress += chunk.length;
        
        //yüklendikçe yüzdelik olarak göstermek istiyoruz.
        console.log(Math.round((100 * progress) / total) + '%');
    });

    readStream.on('end', () => console.log("Bitti!"))
})