//js
const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    res.send('Login Users')
})
module.exports = router;