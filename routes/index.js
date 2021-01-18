const express = require('express');
const fs = require('fs')
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.send('index');
});

router.get('/telefonos', (req, res) => {
  fs.readFile('phones.json', (error, file)=>{
    if(error){
      console.log("No se puede leer el archivo", error)
    }
    const phones = JSON.parse(file)
    
    return res.json(phones)
  })
});

module.exports = router;
