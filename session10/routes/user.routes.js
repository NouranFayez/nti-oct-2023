const userController = require("../app/controller/user.controller")
const router = require("express").Router()

router.post("/register", userController.register)

router.get("/", userController.showAll)
router.get("/:id", userController.getSingle)

router.delete("/", userController.delAll)
router.delete("/:id", userController.delSingle)

router.put("/:id", userController.editSingle)

module.exports = router