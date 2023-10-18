const taskController = require("../app/controller/task.controller")
const {auth, isAdmin} = require("../app/middleware/auth.middleware")
const upload = require("../app/middleware/fileUpload.middleware")
const router = require("express").Router()

router.post("/add", auth, upload.none(), taskController.add)
router.get("/", auth, taskController.getAllTasks)
router.get("/myTasks", auth, taskController.getAllTaskByUserID)
router.get("/:id", auth, taskController.getSingleTask)
router.post("/addNew", auth, upload.array("files"), taskController.addNewFiles)
module.exports = router

/*
<form enctype="multipart/formdata">
*/