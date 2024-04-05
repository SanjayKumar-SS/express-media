const express = require('express');
const router = express.Router();
const path = require('path');

const { uploadFile, getFile } = require('../controllers/mediaController');

router.post('/upload', uploadFile, (req, res) => {
    res.send('File uploaded!');
});

router.get('/file/:name', getFile);

module.exports = router;