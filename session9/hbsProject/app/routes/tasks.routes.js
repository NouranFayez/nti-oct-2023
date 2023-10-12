const router = require("express").Router()

const taskController = require("../controller/tasks.controller")

router.get("/", taskController.showAll)

router.get("/add", taskController.add)
router.get("/addLogic", taskController.addLogic)

router.get("/addPost", taskController.addPost)
router.post("/addLogicPost", taskController.addPostLogic)

router.get("/single/:id", taskController.showSingle)

router.get("/activate/:id", taskController.activate)

router.get("/del/:id", taskController.del)

router.get("/edit/:id", taskController.edit)
router.post("/edit/:id", taskController.editLogic)

module.exports = router
