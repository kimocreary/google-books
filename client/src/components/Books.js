import React, { Component } from 'react';
import axios from 'axios';

class Books extends Component{
    state = {
        id:this.props.id
    }
    savebook = ()=>{
        console.log("before axios post call")
        axios.post("/api/new",{
            title: this.props.title,
            author: this.props.author,
            id: this.props.id,
            link: this.props.link
        }).then((res)=>{

            console.log(res)
        }).catch((err)=>{
            throw err
        })
    }
    render(){
        console.log(this.props)
        return(
            <div key={this.props.id}>  
           
                         <a href={this.props.link}>
                             <strong>
                                 {this.props.title} by {this.props.author}

                             </strong>
                             </a>
                             <button id = 'bookButton' onClick = {this.savebook}>Save book to Database</button>
                         </div>
        )
    }
}
export default Books;