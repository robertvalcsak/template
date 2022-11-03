const { response } = require('express');
const express = require('express')
const app = express()
const port = 3000

const path = require("path");
// require importál
const fs = require("fs")

app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/index.html`))
})

app.use("/public", express.static(`${__dirname}/../frontend/public`))

app.post("/upload", (req, res) => {
    console.log(req.body);
    fs.writeFile(`${__dirname}/data/userData.json`, JSON.stringify(req.body, null, 4), (error) => {
        if(error){
            console.log(error);
            return res.status(500).send(error)
        }else{ res.status(200).send("ok")}
    })
   
})  //endpoint, frontendet hozzá kell igazítani

// app.get('/style.css', (req, res) => {
//     res.sendFile(path.join(`${__dirname}/../frontend/style.css`))
//   })

//   app.get('/script.js', (req, res) => {
//     res.sendFile(path.join(`${__dirname}/../frontend/script.js`))
//   })
  

app.listen(port, () => {
  console.log(`server is running @: http://127.0.0.1:${port}`)
})