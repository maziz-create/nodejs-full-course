const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("About Us Get Method");
});

router.post('/', (req, res) => {
    res.send("About Us Post Method");
});

module.exports = router;