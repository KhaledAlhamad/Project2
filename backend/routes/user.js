const express = require("express")
const router = express.Router()
const axios = require("axios");

router.use(express.json());

const fs = require("fs")



router.get('/', (req,res) => {
    res.json(users)
})





module.exports = router;