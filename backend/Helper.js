const multer = require('multer');
const path = require('path');

module.exports.storage = () => {
    let s = multer.diskStorage({
        destination: "./public/upload/images",
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        },
    })
    return multer({ storage: s });
}


module.exports.generateRandomIntegers=(min, max, count)=> {
    const randomIntegers = [];
  
    for (let i = 0; i < count; i++) {
      let randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
      randomInteger = randomInteger.toString()[0];
      randomIntegers.push(randomInteger);
    }
  
    return randomIntegers;
  }
  