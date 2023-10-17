const userController = require("../app/controller/user.controller")
const {auth, isAdmin} = require("../app/middleware/auth.middleware")
const upload = require("../app/middleware/fileUpload.middleware")
const router = require("express").Router()

router.post("/register", userController.register)

router.post("/registerAsAdmin",auth, isAdmin,userController.registerAsAdmin)

router.get("/",auth , userController.showAll)

router.post("/login", userController.login)

router.get("/profile", auth, userController.profile)

router.get("/:id", userController.getSingle)

router.put("/:id", userController.editSingle)

router.post("/logout",auth, userController.logOut)
router.post("/logoutAll",auth, userController.logOutAll)

router.delete("/", userController.delAll)

router.delete("/:id",auth, userController.delSingle)

router.post("/addAddress", auth, userController.addAddr)
router.delete("/addr/:id", auth, userController.delAddr)

router.post('/profile',auth,  upload.single('pImage'), userController.updateProfileImage)
  

module.exports = router
