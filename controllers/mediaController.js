const fs = require('fs')
const path = require('path')
const multer = require('multer')
const mediaData = require('../data/mediaData')

const testAPI = (request, response) => {
    response.status(200).send(mediaData)
}

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
});

const upload = multer({ storage: storage })

const uploadFile = upload.single('file')

const getFile = (req, res) => {
    let fileName = req.params.name
    let filePath = path.join(__dirname, '../uploads/', fileName)

    fs.readFile(filePath , (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    });
};

module.exports = {testAPI, uploadFile, getFile}