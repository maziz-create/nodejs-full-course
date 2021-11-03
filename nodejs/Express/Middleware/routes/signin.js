const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Signin sayfası get methodu!");
    res.end();
});

router.post('/', (req, res) => {
    res.send("Signin sayfası post methodu!");
    res.end();
});

module.exports = router;