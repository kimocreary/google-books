import React,{Component, useImperativeHandle} from "react";
import axios from "axios";

class Home extends Component{
    state={
        userInput:" "
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
        .then(results=>{console.log(results)})
    //   axios.get("/google/" + this.state.userInput, function(error, response){
    //       if(error)throw error
    //       console.log(response)
    //   })
    }
 render(){
     return(<div>
         <input type="text" name = "userInput" value={this.state.userInput} onChange={this.handleInputChange} ></input>
         <button onClick={this.search}>search</button>
         </div>)
 }
}
export default Home;