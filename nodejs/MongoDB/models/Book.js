//Entity sınıfımız gibi düşünülebilir.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    comments: [{ message: String }],
    meta: {
        votes: Number,
        favs: Number,
    }
});

module.exports = mongoose.model('book', BookSchema);