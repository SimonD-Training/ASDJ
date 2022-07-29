const express = require("express")
const app = express();


app.get('/', (req, res) => {

  res.status(200).json({  stauts:'200', message:' Welcome to Express'});
});

app.post('/', (req, res) => {

  res.status(201).json({  stauts:'201', message:' Youcan post here'});
})

const port = 3000;

app.listen(port, ()=>{

  console.log(`Server listneing to port ${port}../`);
});


