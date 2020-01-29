import React, { Component } from 'react';
import axios from 'axios';

class Books extends Component{
    state = {
        id:this.props.id
    }
    savebook = ()=>{
        console.log("before axios post call", this.props.title)
        axios.post("/api/new",{
            title: this.props.title,
            authors: this.props.author,
            description: this.props.description,
            link: this.props.link,
            googleid: this.props.id
            
            
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
           
                         <a href={this.props.link}></a>
                             <strong>
                                 <span>{this.props.title}</span> </strong><p>by {this.props.author}</p>
                                    <p>{this.props.description} </p>
                             
                             
                             <button id = 'bookButton' onClick = {this.savebook}>Save book to Database</button>
                         </div>
        )
    }
}
export default Books;