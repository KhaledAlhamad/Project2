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
router.post("/signup", (req, res) => {
  fs.readFile("./db/user.json", "utf8", (err, data) => {
    let arr = JSON.parse(data);

    const user = arr.find((user) => user.email == req.body.email);
    console.log(user);
    if (user) {
      return res.status(400).send("Email already exist");
    } else {
      const newUser = {
        email: req.body.email,
        password: req.body.password,
        reviews: [],
        watchlist: [],
      };
      arr.push(newUser);
      fs.writeFile("./db/user.json", JSON.stringify(arr), (err) => {
        res.send("added");
      });
    }
  });
});

// Login
router.post("/login", (req, res) => {
  fs.readFile("./db/user.json", "utf8", (err, data) => {
    let arr = JSON.parse(data);

    const user = arr.find((user) => user.email == req.body.email);

    // console.log(user?.email);
    // console.log(user?.password);

    if (user == null) {
      return res.status(400).send("Cannot find user");
    }
    if (user.password !== req.body.password) {
      return res.status(400).send("Password is NOT correct");
    }
    return res.send(user);
  });
});

// ADD to Watchlist
router.post("/watch", (req, res) => {
  fs.readFile("./db/user.json", "utf8", (err, data) => {
    let arr = JSON.parse(data);
    const user = arr.find((user) => user.email == req.body.email);
    if (user == undefined) {
      res.status(400).send("Not logged in");
    } else {
      user.watchlist.push(req.body.details);
      res.send(user.watchlist);
    }

    fs.writeFile("./db/user.json", JSON.stringify(arr), (err) => {
      res.send("added");
    });
  });
});

// GET Watchlist of single user
router.get("/watch", (req, res) => {
  console.log(req.query.email);
  const u = req.query.email;
  // const user = req.body.email;
  fs.readFile("./db/user.json", "utf8", (err, data) => {
    let arr = JSON.parse(data);
    // res.send(arr)
    const admin = arr.find((user) => user.email == u);
    // console.log(admin)

    if (admin) {
      res.send(admin.watchlist);
    } else {
      res.status(400).send("Not logged in");
      console.log("not");
    }
  });
});

// DELETE anime from Watchlist
router.delete("/watch", (req, res) => {
  // console.log(req.query.email)
  // console.log(req.query.id)

  // const user = req.query.email;
  const anime = req.query.id;
  // // const user = req.body.email;
  fs.readFile("./db/user.json", "utf8", (err, data) => {
    let arr = JSON.parse(data);
    // res.send(arr)
    const toDelete = arr.find((user) => user.email === req.query.email);

    const animeid = toDelete.watchlist.findIndex(
      (anime) => anime.mal_id == req.query.id
    );

    // console.log(animeid);
    console.log(toDelete.watchlist[0])
    
    if (animeid > -1) {
     toDelete.watchlist.splice(animeid, 1);
    }
    // arr.push(toDelete);
    console.log(toDelete)
    


    // fs.writeFile("./db/user.json", JSON.stringify(arr), (err) => {
    //   res.send("added");
    // });
  });
});

module.exports = router;
