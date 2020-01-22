
const router = require("express").Router()
const books = require("../controllers/bookscontroller")

router.get("/api",function(req,res){
    console.log("route reached")
    books.findall(req,res)
})
router.get("/api/:id",function(req,res){
    books.find(req,res)
})
router.post("/api/new",function(req,res){
    console.log(req.body)
    books.create(req,res)
})
router.put("/api/:id",function(req,res){
    books.update(req,res)
})
router.delete("/api/:id",function(req,res){
    books.delete(req,res)
})
    router.get("/google/:searchstring", function(req,res){
        const {searchstring:params}=req
        console.log(params)
        // axios.get("https://www.googleapis.com/books/v1/volumes",{params})
        // .then(results=>{console.log(results)
        // res.json(results)})
    })
module.exports = router