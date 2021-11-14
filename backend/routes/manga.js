const express = require("express")
const router = express.Router()
const axios = require("axios");

router.use(express.json());

const fs = require("fs")

router.get("/", (req,res) => {
    fs.readFile('./db/manga.json', 'utf8' , (err,data) => {
        res.send(data);
    })
    console.log("GET from anime route")
})

router.get("/top", (req,res) => {
    // fs.readFile('./db/manga.json', 'utf8' , (err,data) => {
    //     res.send(data);
    // })
    axios.get('https://api.jikan.moe/v3/top/manga').then((response) => {
        res.send(response.data)
    })
    console.log("GET from manga route")
})



module.exports = router;