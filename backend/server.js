const express = require("express")
const app = express();

const cors = require("cors");

app.use(cors())
app.use(express.json());

const PORT = 8080;


const anime = require("./routes/anime")
const manga = require("./routes/manga")



app.use('/anime',anime)
app.use('/manga',manga)


app.listen(PORT, (err) =>{
    if(err) console.log("ERROR" + err)
    console.log("listening on PORT" + PORT)
})