// const fs = require('fs');

// fs.readFile('demo.txt', (error, data) => {
//     if (error) console.log(error);
//     else console.log(data.toString());

//     console.log("Dosya okuma işlemi tamamlandı!");
// });

/*bu loglama işlemi üstteki işlemin bitmesini beklemez çünkü javascript event-driven bir dildir.
nodeJS'te haliyle böyledir.
console.log("Dosya okuma işlemi tamamlandı!");
peki şu an için ne yapabiliriz? Üstte yazabiliriz. yazdık da.
*/

//-----

/*
readFile'nin bir de senkron hali var. Yukarıdaki asenkron haldeydi.
Peki senkron ne demek? Senkron bir fonksiyon bitmeden asla alta geçilmez.
Asenkronda ise alta geçebilir. İşte NodeJS'nin PHP, DOTNET ' ten farkı bu zaten.
*/

// const demoDosyasi = fs.readFileSync('demo.txt');
// console.log(demoDosyasi.toString());
//işte bu güzel çalışacak çünkü yukarıdaki Sync tanımlandı. bitmeden buraya inmez.
//burada thread bloklanacak. nodejs non-threading bi dil.
// console.log("Dosya okundu!");

//NOT: SENKRON yapıyı gerekmedikçe NODEJS üzerinde kullanmıyoruz! doğasına aykırı.


//-------------------

const fs = require('fs');
// dosyaya ekleme yapıyor.
fs.appendFile('demo.txt', 'Merhaba Dünya!', (err) => {
    if (err) throw err;
    console.log("İşlem bittikten ve hata olmadıktan sonraki callback!");
});

fs.writeFile('demo.txt', '\n\nEski icerik gitti yenisi geldi!', (err) => {
    if (err) throw err;
    console.log("\n\nYazma işlemi başarılı!");
})

fs.unlink('demo.txt', (err) => {
    if (err) throw err;
    console.log("İşlem başarılı!");
})