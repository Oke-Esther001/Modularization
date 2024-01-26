const express  = require("express")
const router  =  express.Router()

const {displayWelcome ,Kenny}  = require("../controller/user.controller")

router.get("/", displayWelcome)
router.get("/Kenny", Kenny)

module.exports = router


// const express  = require("express")
// const router  =  express.Router()

// const {displayKenny} = require("../controller/user.controller")

// router.get("/", displayKenny)
// router.get("/Kenny", displayKenny)

// module.exports = router