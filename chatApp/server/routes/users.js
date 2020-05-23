const express = require('express');
const router = express.Router();
const usrModel = require('../models/user');
const userOperations = require('../controllers/useroperations');


router.post('register', (req, res) => {
    const regUser = req.body;
    userOperations.add(regUser, res);
});

router.post('login', (req, res) => {
    const regUser = req.body;
    userOperations.search(regUser, res);
});

// Getting all the user records userid to frontend (for the sidebar)

router.get('/sidebar', (req, res) => {
    const regUser = req.headers;
    userOperations.sidebarlist(regUser, res);
})

module.exports = router;