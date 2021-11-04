const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    const user = false;
    if (user) res.send("Profile sayfası get method!");
    else next({ status: 404, message: 'Böyle bir kullanıcı yok!' });
});

router.post('/', (req, res) => {
    res.send("Profile sayfası post method!");
});

module.exports = router;