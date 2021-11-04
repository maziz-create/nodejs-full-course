NoSQL nedir?
Sadece sql yapısı barındırmayan, JSON yapılarına benzer yapılar kullanılarka inşa edilen
database yapısı.

NoSQL ' e neden ihtiyaç duyuldu?
SQL => ilişkisel veritabanı. İnternetin patlamasıyla birlikte sürekli veri kaydedilmesi gerekir hale geldi.
SQL yapılarında veri kaydetmek için sütun eklenmeli ve bu maliyetli bir iş. 
Bu sorun üzerine NoSQL veritabanları icat edildi.
NoSQL yapılarına veri eklerken şemada herhangi bir şeyi değiştirmeye gerek yok. 
Al bu benim datam ve bunu kaydet deniyor kısacası.
NoSQL veritabanı SQL veritabanından çok daha hızlı.
NoSQL veritabanında ilişki yapısı yok. Haliyle veri silinirken zorlanmıyor. SQL veritabanında ilişki olduğu için
bir veri silinirken arka tarafta birden fazla sorgu yapılabiliyor ve maliyetli iş haline geliyor.

NoSQL ne zaman kullanılmalı? 
İlişkilerin bir önemi olmadığı, sadece veriyi tutmanın önemli olduğu projelerde...
Fakat ilişkilerin çok önemli olduğu sistemlere No-SQL yapısının kullanılması pek mantıklı olmayabilir.
Örneğin bankacılık sektörleri...

MongoDB Collection nedir?
İlişkisel veritabanlarındaki (SQL, MSSQL) tablolar. Users tablosu mesela.

MongoDB Best Practices!
- Bir array içinde mesajlar göndereceksin mesela. İlgili modelin Schema'sını hazırlarken eğer
Array[], olarak tanımlarsan mesajlar kaydolur
fakat eğer
Array[{message: String}], olarak tanımlarsan eğer her bir mesaja unique bir _id ataması yapar
ve sen de istediğin zaman mesajın bu id değerini kullanabilirsin.