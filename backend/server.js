const express = require("express")
const app = express();

const cors = require("cors");

app.use(cors())
app.use(express.json());

const PORT = process.env.PORT || 8080;
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('../frontend/build'))
}


const anime = require("./routes/anime")
const manga = require("./routes/manga")
const user = require("./routes/user")



app.use('/anime',anime)
app.use('/manga',manga)
app.use('/user',user)


app.listen(PORT, (err) =>{
    if(err) console.log("ERROR" + err)
    console.log("listening on PORT" + PORT)
})