//Entity sınıfımız gibi düşünülebilir.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
        -type  =>  cotes: Number demek gibi bir şey. diğer typeler ile kullanıldığında önemli.
        -default => default olarak bi değer girilsin mi? Birisi ezmedikçe o kalsın mı?
        -required => bu alan gerekli!
        -unique => bir başkası bu alana atanmış değeri kullanamasın.

        Örnekleri aşağıda =>
*/

const BookSchema = new Schema({
    // title: String,  //alttaki gibi de yazılabilir eğer üsttekileri (type required..) kullanmak istersen.
    title: {
        type: String,
        default: 'Eğer biri title girmezse title bu olsun',
        required: true,
        unique: true,
    },
    comments: [{ message: String }],
    meta: {
        votes: Number,
        favs: Number,
    }
});

module.exports = mongoose.model('book', BookSchema);