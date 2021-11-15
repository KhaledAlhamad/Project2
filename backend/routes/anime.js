const express = require("express")
const router = express.Router()
const axios = require("axios");

router.use(express.json());

const fs = require("fs")

// GET Top 
router.get("/top", (req,res) => {
    axios.get('https://api.jikan.moe/v3/top/anime').then((response) => {
        res.send(response.data)
        // console.log(response.data)
    })
    console.log("GET TOP from anime route")
})

// GET Airing
router.get("/airing", (req,res) => {
    axios.get('https://api.jikan.moe/v3/top/anime/1/airing').then((response) => {
        res.send(response.data)
        // console.log(response.data)
    })
    console.log("GET TOP from anime route")
})

// GET Details 
router.get("/:id", (req,res) => {
    const id = req.params.id;
    axios.get(`https://api.jikan.moe/v3/anime/${id}`).then((response) => {
        res.send(response.data)
        console.log(response.data)
    })
    console.log("GET Details from anime route")
})


module.exports = router;