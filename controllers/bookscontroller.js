const db = require("../models/books")
module.exports = {
    findall: function(req,res){
        db.book.find({}).then(function(resp){
            res.json(resp)
        })
        .catch(function(error){
            console.log(error)
            res.status(422).json(error)
        })
    },
    find: function(req,res){
        db.book.findById({_id:req.parms.id}).then(function(resp){
            res.json(resp)
        })
        .catch(function(error){
            console.log(error)
            res.status(422).json(error)
        })
    },

    update: function(req,res){
        db.book.findOneAndUpdate({_id:req.parms.id},req.body).then(function(resp){
            res.json(resp)
        })
        .catch(function(error){
            console.log(error)
            res.status(422).json(error)
        })
    },
    remove: function(req,res){
        db.book.findByIdAndRemove(req.parms.id).then(function(resp){
            res.json(resp)
        })
        .catch(function(error){
            console.log(error)
            res.status(422).json(error)
        })
    },
    create: function(req,res){
        db.book.create(req.body).then(function(resp){
            res.json(resp)
        })
        .catch(function(error){
            console.log(error)
            res.status(422).json(error)
        })
    }

}
