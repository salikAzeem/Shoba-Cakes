const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/")
.then(()=>{
      console.log('mongodb connected');
})
.catch(()=>{
       console.log('error');
})

// const username = document.getElementById("username");
// const password = document.getElementById("password");
//const app=require('./app');
const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
app.get('/', (req, res) => {
  res.send('index.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


function login() {
  // Ketika Username dan Password Benar
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;
  // if (username.value == "admin" && password.value == "12345") {
  //   alert("Successfull");
  //   window.location.assign("index.html");
  // }
  // // Ketika Username dan Password Salah
  // else {
  //   alert("Login!");
  // }
  alert("successfully login! welcome ")
  window.location.assign("index.html");
}
