const router = require("express").Router()
const books = require("../controllers/bookscontroller")
router.get("/",function(req,res){
    books.findall(req,res)
})
router.get("/api/:id",function(req,res){
    books.find(req,res)
})
router.post("/api/new",function(req,res){
    books.create(req,res)
})
router.put("/api/:id",function(req,res){
    books.update(req,res)
})
router.delete("/api/:id",function(req,res){
    books.delete(req,res)
})

module.exports = router