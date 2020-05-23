const express = require('express');
const router = express.Router();
const admModel = require('../models/admin');
const adminOperations = require('../controllers/adminoperatons');

router.post('register', (req, res) => {
    var regUser = req.body;
    adminOperations.add(regUser, res);
})

router.post('login', (req, res) => {
    var regUser = req.body;
    adminOperations.search(regUser, res);
});


module.exports = router;