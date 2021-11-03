const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Profile sayfası get methodu!");
    res.end();
});

router.post('/', (req, res) => {
    res.send("Profile sayfası post methodu!");
});

module.exports = router;