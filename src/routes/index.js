const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({response: "root"})
});

router.get('/auth', (req, res) => {
    res.status(200).json({response: "Auth EP"})
});

router.post('/upload', (req, res) => {
    let incomingFile;
    let uploadPath;
  
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
  
    // The name of the input field (i.e. "incomingFile") is used to retrieve the uploaded file
    incomingFile = req.files.exampleFile;
    uploadPath = process.cwd() + '/reports/' + incomingFile.name;

    // Use the mv() method to place the file somewhere on your server
    incomingFile.mv(uploadPath, (err) => {
      if (err)
        return res.status(500).send(err);
  
      res.send('File uploaded!');
    });
  });
module.exports = router;