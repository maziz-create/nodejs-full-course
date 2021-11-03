const express = require('express');
const router = express.Router();

//helpers
const isLogin = require('../helper/isLogin');

//not: başka middleware varsa parametre olarak verilebilir.
router.get('/', isLogin, (req, res) => {
    res.send("Profile sayfası get methodu!");
    res.end();
});

router.post('/', (req, res) => {
    res.send("Profile sayfası post methodu!");
});

module.exports = router;