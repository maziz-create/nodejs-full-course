const express = require('express');
const router = express.Router();

//models 
const Person = require('../models/Person');

router.get('/new', (req, res, data) => {
    const person = new Person({
        name: 'Mehmet Aziz',
        surname: 'Algüllü',
        identityNumber: '123456789',
    });

    person.save((err, data) => {
        if (err) console.log("Kayıt sırasında hata!", err);
        res.json(data);
    });
});

module.exports = router;