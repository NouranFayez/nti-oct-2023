const userController = require("../app/controller/user.controller")
const auth = require("../app/middleware/auth.middleware")
const router = require("express").Router()

router.post("/register", userController.register)

router.get("/",auth , userController.showAll)
router.get("/:id", userController.getSingle)

router.delete("/", userController.delAll)
router.delete("/:id", userController.delSingle)

router.put("/:id", userController.editSingle)

router.post("/login", userController.login)

router.get("/profile", auth, userController.profile)

router.post("/logout",auth, userController.logOut)
router.post("/logoutAll",auth, userController.logOutAll)

router.post("/addAddress", auth, userController.addAddr)
router.delete("/addr/:id", auth, userController.delAddr)
module.exports = router
