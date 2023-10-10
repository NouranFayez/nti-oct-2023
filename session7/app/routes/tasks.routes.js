const router = require("express").Router()

const taskController = require("../controller/tasks.controller")

router.get("/", taskController.showAll)

router.get("/add", taskController.add)
router.get("/addLogic", taskController.addLogic)

router.get("/addPost", taskController.addPost)
router.post("/addLogicPost", taskController.addPostLogic)

router.get("/edit", taskController.edit)
router.get("/single", taskController.showSingle)
router.get("/del", taskController.del)
router.get("/activate", taskController.activate)

module.exports = router
