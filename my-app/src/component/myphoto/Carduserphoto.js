import React, { Component,useState } from 'react'
import { Card, Button, Accordion, Modal, Form } from "react-bootstrap";
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
    let url1 = "http://localhost:3010/getPublishedDataDB";
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
           console.log("tesxt flag",this.state.flag);         
          }
        })
      })
    });
     console.log(item.url);
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
      let url=`http://localhost:3010/addPublishedDataToDB?`;
      axios.post(url,publishData).then((result)=>{
        console.log('inserted');
      })
  }

   }

   handleCloseUpadate=()=>{
    this.setState({
      showUpdate:false
    })
  }

  updatePhoto=(idx)=>{
    this.setState({
      index:idx,
      showUpdate:true,
      photoName:this.state.userPhoto[idx].title,
      description:this.state.userPhoto[idx].description
    })
  }

  updatePhotoHandler= async(event,item)=>{
    event.preventDefault();

console.log(item);
    const index = this.state.index;
    const userData ={
      imgurl:this.state.imgurl,
      photoName : event.target.photoName.value,
      description:event.target.description.value,
      email:this.props.auth0.user.email,
    }
    console.log(userData);
    // console.log(index,userData)
    const updatedData = await axios.put(`http://localhost:3010/updatePhoto/${index}`,userData)

    this.setState({
      userPhoto:updatedData.data
    })
  }

  nameChange=(e)=>{
    this.setState({
      photoName:e.target.photoName,
    })
  }

 descriptionChange=(e)=>{
    this.setState({
      description:e.target.description,
    })
  }
    render() {
        return (
            <div>
                 <CardColumns>
          {this.props.userphoto.map((item,idx) => {
            return (
              <>
              <div  class="img-container">
                <img style={{ height: "493.067px", width: "500px", borderRadius: "5px", zIndex: "-1" }} src={item.url} ></img>
              </div>
              <div class="text-container">
                <h4>{item.title} </h4>
              

              </div>


              <section class="container">

                {/* <button class="btttn" variant="primary" onClick={()=>this.props.deletePhoto(idx)} data-hover="Delete!"><div>Delete</div></button> */}
              
                <button class="btttn"onClick={() => this.props.updatePhoto(idx,item)}><FontAwesomeIcon icon={faEdit} /></button>
                <button class="btttn" onClick={()=>this.props.deletePhoto(idx,item.url)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                <button class="btttn" disabled={this.state.disable} onClick={()=>this.sendPublished(item)}><FontAwesomeIcon icon={faShareSquare} /></button>
              </section>
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
