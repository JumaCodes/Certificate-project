const multer = require('multer');
const path = require('path');

module.exports.storage = () => {
    let s = multer.diskStorage({
        destination: "./upload/images",
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        },
    })
    return multer({ storage: s });
}