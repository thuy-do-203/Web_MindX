const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../assets'))
    },
    filename: function (req, file, cb) {
        const suffix = Date.now() + "-" + Math.round(Math.random() *1000);
        const fileName = file.fieldname + "-" + suffix + "-" + file.originalname;
        req.uploadedFile = "http://localhost:5001/assets/" + fileName;
        cb(null, fileName)
    }
});

const uploadMdw = multer({ storage: storage });

router.post('/', uploadMdw.single('myFile'), (req, res) => {
    res.send(req.uploadedFile)
});

module.exports = router;