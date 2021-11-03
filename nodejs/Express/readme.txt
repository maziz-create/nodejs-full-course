Express nedir?
Nodejs framework'üdür diyebiliriz. İçerisinde built-in olarak routing yapısı gelir.

Express neler sağlıyor?
Önceki örneklerde nodejs ile web server açıp bir html dosyası serve etmiştik ve güzelce çalışmıştı.
Daha sonra ben acaba css eklenebilir mi diye düşünüp css eklediğimde sayfada çalışmıyordu.
Bunun sebebi tarayıcıların sadece res.write için değil, sayfada bulunan her script ve linkler için
ayrı ayrı isteklerde bulunuyor olması. Bu istekleri karşılayacak fonksiyonu üretip file-system ile
dosya okunup onun da serve edilmesi gerekiyor. İşte express burada yardımımıza koşuyor. Ayrıca built-in
olarak gelen routing yapısı da mevcut.

Express statik klasör belirlemek nedir?
Hatırlarsak express olmadan nodejs kullandığımızda sayfaya eklenilen her link ve script için
nodejs tarafında her bir dosya için karşılama fonksiyonu yazıp ayrı serve etmemiz gerekiyordu.
Express ile buna gerek kalmayacak demiştik. İşte bunun için statik klasör belirleyip 
oradan hallediyoruz bu işleri.

Pug nedir? (Eski adı ile Jade)
Express ile html yanıtları dönüyoruz ya hani. Pug sayesinde bunu çok daha basit yapabiliyoruz.
Mesela res.send("<div>hello</div>") yazımızı   div hello    olarak yazabiliyoruz.
Ayrıca if else yapısını da kullanabiliyoruz.
Ayrıca forEach gibi döngüleri kullanabiliyoruz.
Ayrıca bir dosyayı başka bir dosyada include edebiliyoruz.
Not: pug için block ve layout şeylerini eklemedim kafa karıştırıcı olabilir diye. Zaten bolca 
kullanılması gerekiliyormuş express + pug ile proje yapılırken.

Pug dosyası nasıl üretilir, okunur?
Pug dosyaları kök dizinde 'views' klasörü altında dosyaismi.pug olarak üretilmelidir. Daha sonra
express ile app.set('view engine', 'pug');

Pug dosyasına express içerisinden değişken gönderebiliyor muyuz?
Evet. res.render('pugDosyaIsmi', { degisken: 'degeri' });

Bir pug dosyasını bir başka pug dosyasına include etmek mümkün mü?
Evet.


Middleware nedir?
Request yapıldıktan sonra respond dönmeden önce arada yapılması istenilen işler olabilir.
Mesela kullanıcı giriş yapmış mı?
Bunun kontrolünü basit bir şekilde gerekli route dosyasının içinde de yapabiliriz fakat
yüzlerce route/sayfa olduğunu düşünürsek bi hayli zordur. Bu yüzden app.js içerisinde yapmak 
daha mantıklı. app.use(callbackFn) şeklinde yazılabilir.