// const mongoose = require("mongoose");



// const connect = () => {
//     mongoose.connect("mongodb://localhost:27017");
//     console.log("connected");
// }

// module.exports = connect;


const express = require("express"); 
const mongoose = require("mongoose"); 
const bodyParser = require("body-parser"); 
const app = express(); 
const port = 4010; 
 
app.use(bodyParser.json()); 
app.use(express.json()); 
 
const cors = require("cors"); 
app.use( 
  cors({ 
    origin: "*", // allow all origins 
  }) 
); 
 
mongoose.connect( 
  "mongodb+srv://ShivaniRathor:Shivani123@cluster0.dy60gcv.mongodb.net/backend?retryWrites=true&w=majority", 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
  } 
); 
 
const con = mongoose.connection; 
con.on("open", function () { 
  console.log("Connected.. "); 
}); 
 
app.get("/", async (req, res) => { 
  res.send({ 
    message: "Welcome to the backend1234", 
  }); 
}); 
 
app.use("/todos", todoRouter); 
app.use("/mydetails", mydetails); 
 
app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`); 
});