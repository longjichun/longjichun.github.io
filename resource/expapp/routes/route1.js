var express = require("express")
var router = express.Router()
router.get("/iphone",(req, res)=>{
	res.end("the routes is /phone/cls/iphone")
})

router.get("/sung",(req, res)=>{
	res.end("the routes is /phone/cls/sung")
})
module.exports = router