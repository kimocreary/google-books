var mongoose = require ("mongoose");
var Schema = mongoose.Schema;
var booksSchema = new Schema({
    title:{
        type: String,
        required: true 
    },
    authors:{
        type: String,
        required: true 
    },
    description:{
        type: String,
        required: true 
    },
    image:{
        type: String,
        required: true 
    },
    link:{
        type: String,
        required: true 
    },
    googleid:{
        type: String,
        required: true,
        unique: true
    }

})
var Book = mongoose.model("Book",booksSchema);
module.exports = Book