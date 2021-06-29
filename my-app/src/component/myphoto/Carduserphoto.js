import React, { Component,useState } from 'react'
import { Card, Button, Accordion } from "react-bootstrap";
import CardColumns from "react-bootstrap/CardColumns";
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
export class Carduserphoto extends Component {

  
  constructor(props){
    super(props);
    this.state={
      disable:false,
      data:[]
    }
  }
 
   sendPublished=(item)=>{
    this.setState({
      disable:true
    })
    let resultPublished;
    let url1 = "http://localhost:3010/getPublishedDataDB";
    axios.get(url1).then((result) => {
      this.setState({
        data:result.data
      })
      console.log(this.state.data);
    });
    
    // resultPublished.forEach((item)=>{
    //   item[0].forEach((element,idx)=>{
    //     console.log(element);
    //   })
    // })



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
              <Card style={{ width: "18rem" }} key={idx}>
                <Card.Img variant="top" src={item.url} />

                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      Picture Description <br /> <br />
                      <small className="text-muted">
                        Click for Description
                      </small>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body> {item.description} </Card.Body>
                    </Accordion.Collapse>
                  </Accordion>
                </Card.Body>
                <Button onClick={()=>this.props.deletePhoto(idx,item.url)}>Delete</Button>
                <Button disabled={this.state.disable} onClick={()=>this.sendPublished(item)}>Publish</Button>
              </Card>
            );
          })}
        </CardColumns>
                
            </div>
        )
    }
}

export default withAuth0(Carduserphoto);
