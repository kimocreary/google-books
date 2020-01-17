import React,{Component, useImperativeHandle} from "react";
import axios from "axios";

class AllBooks extends Component{
    state = {
        books: []
    }
    componentDidMount=()=>{
        axios.get("/api")
        .then(res=>{
            console.log(res)
            this.setState({books: res.data.items})
        })
    }
    render(){
        console.log(this.state,"state")
        return(
            <div>
                testing all books
            </div>
        )
    }}
    export default AllBooks