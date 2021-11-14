const express = require("express");
const router = express.Router();
const axios = require("axios");
const bcrypt = require("bcrypt");

router.use(express.json());

const fs = require("fs");

// GET users 
router.get("/", (req, res) => {
  fs.readFile("./db/user.json", "utf8", (err, data) => {
    res.send(data);
  });
});

// ADD new user SignUp
router.post("/signup", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    fs.readFile("./db/user.json", "utf8", (err, data) => {
      let arr = JSON.parse(data);
      const newUser = { email: req.body.email, password: hashedPassword };
        arr.push(newUser);
      fs.writeFile("./db/user.json", JSON.stringify(arr), (err) => {
        res.send("added");
      });
    });
  } catch {
    res.status(500).send();
  }
});

// Login
router.post("/login", async (req, res) => {
      fs.readFile("./db/user.json", "utf8", (err, data) => {
        let arr = JSON.parse(data);
        const user = arr.find(user => req.body.email)
        if(user == null){
            return res.status(400).send("Cannot find user")
        }
      });
      try{
            if(await bcrypt.compare(req.body.password, user.password)){
                res.send("Success")
            }
            else{
                res.send("NOT Allowed")
            }
    }
     catch {
      res.status(500).send();
    }
  });

module.exports = router;
