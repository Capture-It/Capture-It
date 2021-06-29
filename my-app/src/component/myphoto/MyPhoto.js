import React, { Component } from "react";
import axios from "axios";
import { withAuth0 } from '@auth0/auth0-react';
import Addphoto from "./Addphoto";
import Carduserphoto from "./Carduserphoto";

export class MyPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      userPhoto:[]
    };
  }

  

  //this function to render the image from the database that the user choose
  componentDidMount = async () => {
    let email = this.props.auth0.user.email;
      // localhost:3010/getuserphoto?email=abdullah@yahoo.com
      let urluserPhoto = `http://localhost:3010/getuserphoto?email=${email}`;
    axios.get(urluserPhoto).then((photoResult) => {
      let userPhoto = photoResult.data;
      this.setState({
        userPhoto: userPhoto,
      });
    });
  };
  addphoto=(event)=>{
    console.log('test');
    event.preventDefault();
    const photoobj={
      title:event.target.title.value,
      description:event.target.des.value,
      imgurl:event.target.imgurl.value,
      email: this.props.auth0.user.email
    }
    let url = `http://localhost:3010/addUserPhoto`;
    axios.post(url,photoobj).then((photoResult) => {
      let userPhoto = photoResult.data;
      this.setState({
        userPhoto: userPhoto,
      });
      this.componentDidMount();
    
      
    });


    console.log(photoobj);
  }


  deleteUserPhoto = async (index,url,id) => {
    console.log(
      "🚀 ~ file: MyPhoto.js ~ line 25 ~ MyPhoto ~ deletePhoto ~ index",
      index
    );
    console.log('this url:,',url );

    let user = this.props.auth0.user.email;
     console.log(url);
    const userPhotos = await axios.delete(
      `http://localhost:3010/deleteUserphoto/${index}`,
      { params: { email: user } }
    );

    this.setState({
      userPhoto: userPhotos.data,
    });
    
    const userPublishedPhotos = await axios.delete(
      `http://localhost:3010/deletePublishedphoto/${id}`,
      { params: { email: user,url:url } }
      );
     
      // http://localhost:3010/deletePublishedphoto/
      console.log('after delete publish',userPublishedPhotos);
      // this.setState({
      //   userPhoto: userPublishedPhotos.data,
      // });
      this.componentDidMount();




  };
 
  render() {
    const {isAuthenticated,user }=this.props.auth0;
    return (
      <div>
        <Addphoto getInfo={this.addphoto} />
        {isAuthenticated&&<h2>Welcome {user.nickname}</h2> }
        {/* <img src={user.picture} alt='t'/> */}
        <Carduserphoto userphoto={this.state.userPhoto} deletePhoto={this.deleteUserPhoto}/>
       
      </div>
    );
  }
}

export default withAuth0(MyPhoto);
