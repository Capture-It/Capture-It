import React, { Component } from 'react'
import { Card, Button, Accordion } from "react-bootstrap";
import CardColumns from "react-bootstrap/CardColumns";
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Carduserphotos from "./Carduserphoto.css"
export class Carduserphoto extends Component {
   sendPublished=(item)=>{

     console.log(item.url);
    const publishData={
      email:this.props.auth0.user.email,
      nickName:this.props.auth0.user.nickname,
      title:item.title,
      description:item.description,
      url:item.url,
    }
    console.log(this.props.auth0.user);
    let url=`http://localhost:3010/addPublishedDataToDB?`;
    axios.post(url,publishData).then((result)=>{
      console.log('inserted');
    })

   }
    render() {
        return (
            <div>
                 <CardColumns>
          {this.props.userphoto.map((item,idx) => {
            return (
              <>
              
              <div class="img-container">
                <img style={{ height: "493.067px", width: "500px", borderRadius: "5px", zIndex: "-1" }} src={item.url}></img>
              </div>
              <div class="text-container">
                <h4>{item.title}</h4>

              </div>


              <section class="btncontainer">

                <button  variant="primary" onClick={()=>this.props.deletePhoto(idx,item.url)} >Delete</button>
                <button  variant="primary" onClick={()=>this.sendPublished(item)} >Publish</button>
                <button  variant="primary" onClick={()=>this.sendPublished(item)} >Update</button>
              </section>
            </>
            );
          })}
        </CardColumns>
                
            </div>
        )
    }
}

export default withAuth0(Carduserphoto);
