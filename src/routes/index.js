import { Router } from 'express';
import {JwtEncode} from '../services/auth.service.js';
import {login, updateUserToken} from '../services/user.service.js';

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({response: "root"})
});

router.post('/auth', async (req, res) => {
  if (!req.body.user || !req.body.password) {
    res.status(400).json({message: "bad request"});
    return;
  }
  const {user, password} = req.body;
  const validUser = await login(user, password);
  if (!validUser) {
    res.status(403).json({message: "unauthorized"});
    return;
  }
  const token = JwtEncode(validUser);
  if (!token) {
    res.status(403).json({message: "unauthorized"});
    return;
  }
  res.status(200).json({token})
  await updateUserToken(user,token);
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

router.get('/report', (req, res) => {
  console.log(req.body.cedula);
  res.status(200).send("<h1>Hola</h1>");
})

export default router;