import multer from "multer";
import _dirname from '../utils.js'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, _dirname + '/public/images');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const uploader = multer({ storage });
export default uploader;