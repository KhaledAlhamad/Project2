const express = require("express");
const router = express.Router();
const axios = require("axios");

router.use(express.json());

const fs = require("fs");

// GET Top
router.get("/top", (req, res) => {
  axios.get("https://api.jikan.moe/v3/top/anime").then((response) => {
    res.send(response.data);
    // console.log(response.data)
  });
  console.log("GET TOP from anime route");
});

// GET Airing
router.get("/airing", (req, res) => {
  axios.get("https://api.jikan.moe/v3/top/anime/1/airing").then((response) => {
    res.send(response.data);
    // console.log(response.data)
  });
  console.log("GET TOP from anime route");
});

// GET Details
router.get("/:id", (req, res) => {
  const id = req.params.id;
  // const u = req.query.email;
  // console.log('req.query.email req.query.email req.query.email req.query.email',u)
  axios.get(`https://api.jikan.moe/v3/anime/${id}`).then((response) => {
    fs.readFile("./db/anime.json", "utf8", (err, data) => {
      let arr = JSON.parse(data);
      const admin = arr.find((user) => user.id == id);

      if (admin) {
        res.send([response.data, admin]);
      } else {
        res.send([response.data, ""]);
      }
      // else{
      //   res.status(400).send("Not logged in")
      //  console.log("not")
      // }
    });
  });
  console.log("GET Details from anime route");
});

router.post("/review", (req, res) => {
  const id = req.body.id;
  const obj = req.body.obj;

  fs.readFile("./db/anime.json", "utf8", (err, data) => {
    let arr = JSON.parse(data);
    // res.send(arr)
    const index = arr.findIndex((e) => e.id == id);

    if (index != -1) {
      const admin = arr[index];
      admin.reviews.push({
        email: obj.email,
        content: obj.content,
        username: obj.username,
        date: obj.date,
        likes: 0,
      });
      arr[index] = admin;
    } else {
      arr.push({
        id: id,
        reviews: [
          {
            email: obj.email,
            content: obj.content,
            username: obj.username,
            date: obj.date,
            likes: 0,
          },
        ],
      });
    }
    fs.writeFile("./db/anime.json", JSON.stringify(arr), (err) => {
        res.send(arr);
      });
  });
});

module.exports = router;
