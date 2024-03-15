const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({response: "root"})
});

router.get('/auth', (req, res) => {
    res.status(200).json({response: "Auth EP"})
});

module.exports = router;