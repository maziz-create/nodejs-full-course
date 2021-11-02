NodeJS birleşik bir http sunucusu ile birlikte gelir.


Nodemon: bir şey yazılıp kaydedildiğinde yapılan requestlerde gözükmesi için
projeyi kapatıp açmamız gerekiyordu. Nodemon ile buna gerek yok. npm install nodemon 
diye yükledikten sonra node dosyaismi yerine nodemon dosyaismi yazıyoruz ve 
bir şey yazıp kaydettiğimizde kendisi baştan başlatıp hazır hale getiriyor.


Http metodları:

/*
get methodu özel işler için değil normal sayfaların açılması için kullanılan bir http metodudur.
*/
*GET => http://domain.com/register?username=aziz&&passoword=12345




/*
post methodu özel işler için de kullanılabilir.
get methodu eğer giriş/kayıt işlemlerinde kullanılırsa tarayıcı geçmişinde görünür.
başlangıçta her şey get methodu ile yapılabiliyorken bunu sürdürmek güvenlik açısından tehlikelidir.
*/
*POST => 




/*
güncelleme işlemi put ile yapılır.
*/
*PUT => 




*DELETE =>