Express nedir?
Nodejs framework'üdür diyebiliriz. İçerisinde built-in olarak routing yapısı gelir.

Express neler sağlıyor?
Önceki örneklerde nodejs ile web server açıp bir html dosyası serve etmiştik ve güzelce çalışmıştı.
Daha sonra ben acaba css eklenebilir mi diye düşünüp css eklediğimde sayfada çalışmıyordu.
Bunun sebebi tarayıcıların sadece res.write için değil, sayfada bulunan her script ve linkler için
ayrı ayrı isteklerde bulunuyor olması. Bu istekleri karşılayacak fonksiyonu üretip file-system ile
dosya okunup onun da serve edilmesi gerekiyor. İşte express burada yardımımıza koşuyor. Ayrıca built-in
olarak gelen routing yapısı da mevcut.

Pug nedir? (Eski adı ile Jade)
Express ile html yanıtları dönüyoruz ya hani. Pug sayesinde bunu çok daha basit yapabiliyoruz.
Mesela res.send("<div>hello</div>") yazımızı   div hello    olarak yazabiliyoruz.
Ayrıca if else yapısını da kullanabiliyoruz.
Ayrıca forEach gibi döngüleri kullanabiliyoruz.
Ayrıca bir dosyayı başka bir dosyada include edebiliyoruz.


