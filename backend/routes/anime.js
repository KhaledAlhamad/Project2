const express = require("express")
const router = express.Router()

router.use(express.json());

const fs = require("fs")

router.get("/upcoming", (req,res) => {
    fs.readFile('./db/upcoming.json', 'utf8' , (err,data) => {
        res.send(data);
    })
    console.log("GET from anime route")
})

module.exports = router;