import multer from "multer"

const storage = multer.diskStorage({
    destination(req,file,cb) {
        cb(null, 'uploads/')
    },
    filename(req,file,cb) {
        cb(null, new Date().toDateString().replaceAll(":", "-") + "_" + file.originalname)
    }
})

const types = ['image/png', 'image/jpeg', 'image/jpg']

const fileFilter = (req,file,cb) => {
    if (types.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null ,false)
    }
}


export default multer({storage, fileFilter})