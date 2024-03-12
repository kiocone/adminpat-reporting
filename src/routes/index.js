const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('panel');//Render Main Panel
});

router.get('/signin', (req, res) => {
    res.render('auth/signin');
});

module.exports = router;