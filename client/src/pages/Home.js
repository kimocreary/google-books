import React,{Component, useImperativeHandle} from "react";
import axios from "axios";

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
            this.setState({books: results.data.items})
        })
    //   axios.get("/google/" + this.state.userInput, function(error, response){
    //       if(error)throw error
    //       console.log(response)
    //   })
    }
 render(){
    console.log(this.state,"state")
     return(<div>
         <input type="text" name = "userInput" value={this.state.userInput} onChange={this.handleInputChange} ></input>
         <button onClick={this.search}>search</button>
         {this.state.books.length ? (
             <div>
                 {this.state.books.map(book => {
                     return (
                         <div key={book.id}>   
                         <a href={"/books/" + book.id}>
                             <strong>
                                 {book.volumeInfo.title} by {book.volumeInfo.authors[0]}
                             </strong>
                             </a>
                         </div>
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