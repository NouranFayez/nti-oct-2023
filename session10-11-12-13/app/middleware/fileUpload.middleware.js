const multer  = require('multer')
// const upload = multer({ dest: 'public/' })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '.' + ( file.originalname.split(".").pop())
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({storage})
module.exports = upload