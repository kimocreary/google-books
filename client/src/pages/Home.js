import React,{Component, useImperativeHandle} from "react";
import axios from "axios";
import Books from "../components/Books";

class Home extends Component{
    state={
        userInput:" ",
        books:[]
    }
    handleInputChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]:value
            
        })
    }
    search = ()=>{
        console.log(this.state.userInput)
        const userInput = this.state.userInput;
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + userInput)
        .then(results=>{
            console.log(results)
            var book = []
            for (let i = 0; i < results.data.items.length; i++){
                book.push({
                    title:results.data.items[i].volumeInfo.title,
                    author:results.data.items[i].volumeInfo.authors,
                    id:results.data.items[i].id,
                    link:results.data.items[i].volumeInfo.previewLink,
                })
            }
            this.setState({books: book})
        })
    //   axios.get("/google/" + this.state.userInput, function(error, response){
    //       if(error)throw error
    //       console.log(response)
    //   })
    }
 render(){
    console.log(this.state.books,"state")
     return(<div>
         <input type="text" name = "userInput" value={this.state.userInput} onChange={this.handleInputChange} ></input>
         <button onClick={this.search}>search</button>
         {this.state.books.length ? (
             <div>
                 {this.state.books.map((book,index) => {
                     return (
                         <Books
                            key = {index}
                            title = {book.title}
                            author = {book.author}
                            id = {book.id}
                            link = {book.link}
                         />
                     )
                 })}
             </div>
         ) :(
             <h3>No Results to Display</h3>
         )}
         </div>)
 }
}
export default Home;