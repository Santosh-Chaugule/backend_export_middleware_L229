//const something =require(somelibrary)
// const { config } = require('dotenv');
const express = require('express');

//const {named import} =require(./somefolder)
const { mWfN1, mWfN2 } = require('./middleware/mymiddleware');

// require('dotenv').config();
// console.log(process.env.PORT)
//every function return something
const app = express();

app.use(express.json())

app.post('/students', mWfN1, mWfN2, (req, res) => {
    let name = req.body.name;
    let surname = req.body.surname;
    res.json({ "msg": `Hi ${name}${surname} How are you??` })
})


const PORT = 8000;
app.listen(PORT, function () {
    console.log(`The server is running on post ${PORT}`)
})