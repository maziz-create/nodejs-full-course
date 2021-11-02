Stream nedir ? 
Youtube bize videoları nasıl yolluyor? paket paket yolluyor.
Biz o paketleri indirdikçe videonun o kadar süresine sahip oluyoruz.
Buna stream deniyor. Yani video tamamen indirilip de gelmiyor bize,
paket paket geliyor. 


Stream'in bellek performansına katkısı nedir?
Dosyalar Stream kullanılmadan doğrudan gönderildiği taktirde bellekte çok fazla yer kaplar işlem anında.
Fakat Stream ile paket paket gönderirsek %80-90 oranında bellekten tasarruf edilebilir.


Stream nasıl yönetilir?
Stream NodeJS'te eventEmitter ve dosya sistemi(fs) ile yönetilir.
Paketler karşıya ulaştıkça (bunlara chunk deniyor) bize istediğimiz
bildirim gelebilir.


Read Stream nedir? 
Karşı tarafa data ulaştıkça onu loglamaktır.


Write Stream nedir?
Okunan dosyanın dosyanın datası başka bir dosyaya aktarılır yani kısacası dosya klonlanır.


Chunk nedir?
Stream'e açtığımız dosyanın karşı tarafa ulaşan her bir datası yani her bir paketi
bir chunk olur.


Chunk.length nedir?
Ulaşan datanın BYTE olarak boyutunu verir. Bir değişken üretip, 0 ile initialize edip sonra += ile
chunk.lenght'leri onda biriktirirsek eğer ('data' eventEmitter'inde) dosyanın boyutunu bulabiliriz. 