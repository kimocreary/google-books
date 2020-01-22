var express = require ("express");
var mongoose = require ("mongoose");
var app = express();
var Port = process.env.PORT|| 5000;
var routes = require("./routes/routes")
app.use(routes)
app.use(express.urlencoded({extended:true}));
app.use(express.json())

if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"))
}
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);
app.listen(Port,function(){
    console.log("listening on ", Port)
})