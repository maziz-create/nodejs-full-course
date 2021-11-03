const express = require('express');
const router = express.Router();

router.get('/signIn', (req, res) => {
    res.send("signIn sayfası get methodu");
    res.end();
});

router.post('/signIn', (req, res) => {
    res.send("signIn sayfası post methodu");
    res.end();
});

module.exports = router;