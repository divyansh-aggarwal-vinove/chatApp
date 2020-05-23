const express = require('express');
const router = express.Router();
const chatModel = require('../models/chat');
const chatOperations = require('../controllers/chatoperations');

router.get('/history', (req, res) => {
    const ToFrom = req.body;
    chatOperations.history(ToFrom, res);
});

module.exports = router;