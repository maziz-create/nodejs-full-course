const express = require('express');
const router = express.Router();

//models
const Book = require("../models/Book");

router.get('/', (req, res, next) => {
    const book = new Book({
        title: 'Esaretin Bedeli',
        comments: [
            { message: 'süperdi', },
            { message: 'bayıldım!' },
            { message: 'sevgilim de çok sevdi.' }
        ],
        meta: {
            votes: 100,
            favs: 200,
        }
    });

    book.save((err, data) => {
        if (err) console.log(err);
        res.json(data);
    });
});

//sorgu yazacağız.
//'comments title' => sadece comments ve title alanları gelsin.
//
router.get('/search', (req, res) => {
    Book.find({ title: 'Esaretin Bedeli' }, 'title comments', (err, data) => {
        if(err) console.log("Sorgu hatası! ", err);
        res.json(data);
    });
});

module.exports = router;