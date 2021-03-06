import React, { Component } from 'react'
import {  Button, Modal, Form } from "react-bootstrap";
import CardColumns from "react-bootstrap/CardColumns";
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import "./Carduserphoto.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee ,faHome,faTimes } from '@fortawesome/free-solid-svg-icons';
import { faHeart,faShareSquare,faTrashAlt,faComment, faEdit } from '@fortawesome/free-regular-svg-icons';
export class Carduserphoto extends Component {

  
  constructor(props){
    super(props);
    this.state={
      disable:false,
      data:[],
      flag:''
    }
  }
 
   sendPublished= async (item)=>{
    console.log("first",item.url);
    let url1 = `${process.env.REACT_APP_URL}/getPublishedDataDB`;
    await axios.get(url1).then((result) => {
      this.setState({
        data:result.data
      })
      this.state.data.forEach((x)=>{
        x.userPublishedData.forEach((element,idx)=>{
         if(element.url===item.url){
           this.setState({
             flag:element.url
           }) 
          }
        })
      })
    });
    const publishData={
      email:this.props.auth0.user.email,
      nickName:this.props.auth0.user.nickname,
      title:item.title,
      description:item.description,
      url:item.url,
      like:0
    }
    if(this.state.flag){
      alert("It's Already Published")
    }else{
      console.log(this.props.auth0.user);
      let url=`${process.env.REACT_APP_URL}/addPublishedDataToDB?`;
      axios.post(url,publishData).then((result)=>{
        console.log('done');
      })
  }

   }
   
    render() {
        return (
            <div>
                 <CardColumns>
          {this.props.userphoto.map((item,idx) => {
            return (
              <>
              <div className="maindiv1">
                <img style={{ height: "493.067px", width: "500px", borderRadius: "5px", zIndex: "-1" }} src={item.url} alt='pic' ></img>
             
                <h4 className="title">{item.title}</h4>
                {/* <p className="title1">{item.description}</p> */}

                {/* <button class="btttn" variant="primary" onClick={()=>this.props.deletePhoto(idx)} data-hover="Delete!"><div>Delete</div></button> */}
              
                <button className="btttn1"onClick={() => this.props.updatePhoto(idx,item)}><FontAwesomeIcon icon={faEdit} size="lg" /></button>
                <button className="btttn2" onClick={()=>this.props.deletePhoto(idx,item.url)}><FontAwesomeIcon icon={faTrashAlt} size="lg"/></button>
                <button className="btttn3" disabled={this.state.disable} onClick={()=>this.sendPublished(item)}><FontAwesomeIcon icon={faShareSquare} size="lg"/></button>
                </div>
             
            </>
             
              
               
              

              


              
            );
          })}
        </CardColumns>
                
        <Modal show={this.props.showUpdate} onHide={this.props.handleCloseUpadate}>
          <Modal.Header closeButton>
            <Modal.Title>Update your photo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.props.updatePhotoHandler(e)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Photo Name</Form.Label>
                <Form.Control type="text" name='photoName' onChange={(e) => this.props.nameChange(e)} value={this.props.photoName} />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>description</Form.Label>
                <Form.Control type="text" name='description' onChange={(e) => this.props.descriptionChange(e)} value={this.props.description} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>url</Form.Label>
                <Form.Control type="text" value={this.props.newimgurl} disabled/>
              </Form.Group>

              <Button variant="primary" type="submit" onClick={this.props.handleCloseUpadate}>
                Update
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
            </div>
        )
    }
}

export default withAuth0(Carduserphoto);
