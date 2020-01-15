import React,{Component, useImperativeHandle} from "react";
import axios from "axios";

class AllBooks extends Component{
    componentDidMount=()=>{
        axios.get("/api")
        .then(res=>{
            console.log(res)
        })
    }
    render(){
        return(
            <div>

            </div>
        )
    }}
    export default AllBooks