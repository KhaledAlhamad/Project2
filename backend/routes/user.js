const express = require("express");
const router = express.Router();
const axios = require("axios");
const bcrypt = require("bcrypt");

router.use(express.json());

const fs = require("fs");

router.get("/", (req, res) => {
  fs.readFile("./db/user.json", "utf8", (err, data) => {
    res.send(data);
  });
});

router.post("/", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    fs.readFile("./db/user.json", "utf8", (err, data) => {
      let arr = JSON.parse(data);

    //   console.log(arr)
    //   console.log(salt);
    //   console.log(hashedPassword);

      const user = { email: req.body.email, password: hashedPassword };
      arr.push(user);
      fs.writeFile("./db/user.json", JSON.stringify(arr), (err) => {
        res.send("added");
      });
    });
  } catch {
    res.status(500).send();
  }
});

module.exports = router;
