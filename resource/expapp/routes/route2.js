var express = require("express")
var router = express.Router()
router.get("/watch1",(req, res)=>{
	res.end("the routes is /watch/cls/watch1")
})

router.get("/watch2",(req, res)=>{
	res.end("the routes is /watch/cls/watch2")
})
module.exports = router