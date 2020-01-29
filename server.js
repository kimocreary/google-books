var express = require ("express");
var mongoose = require ("mongoose");
var app = express();
var Port = process.env.PORT|| 8080;
var routes = require("./routes/routes")
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use(routes)
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
console.log("starting server")
app.listen(Port,function(){
    console.log("listening on ", Port)
})