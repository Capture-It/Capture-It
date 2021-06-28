import React, { Component } from "react";
import CardPhoto from "./CardPhoto";
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

  //this function to delete the image from the database that the user choose

  deletePhoto = async (index) => {
    console.log(
      "🚀 ~ file: MyPhoto.js ~ line 25 ~ MyPhoto ~ deletePhoto ~ index",
      index
    );

    let user = this.props.auth0.user.email;
    const photos = await axios.delete(
      `http://localhost:3010/deletephoto/${index}`,
      { params: { email: user } }
    );

    this.setState({
      data: photos.data,
    });
  };

  //this function to render the image from the database that the user choose
  componentDidMount = async () => {
    console.log('heeer');
    // console.log(this.props.auth0.user);
    // this.props.auth0.user.picture='https://tse4.mm.bing.net/th?id=OIP.3PLCiUSmRbFhJtkdmY23_AHaEK&pid=Api&P=0&w=283&h=160'
    // console.log(this.props.auth0.user);
    let email = this.props.auth0.user.email;
    let url = `http://localhost:3010/getphoto?email=${email}`;
    axios.get(url).then((photoResult) => {
      let photoData = photoResult.data;
      this.setState({
        data: photoData,
      });
      console.log(this.state.data);
    });
      // localhost:3010/getuserphoto?email=abdullah@yahoo.com
      let urluserPhoto = `http://localhost:3010/getuserphoto?email=${email}`;
    axios.get(urluserPhoto).then((photoResult) => {
      let userPhoto = photoResult.data;
      this.setState({
        userPhoto: userPhoto,
      });
    });
  };
//this function to return the data that user input in the form and store it in the database
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


  deleteUserPhoto = async (index) => {
    console.log(
      "🚀 ~ file: MyPhoto.js ~ line 25 ~ MyPhoto ~ deletePhoto ~ index",
      index
    );

    let user = this.props.auth0.user.email;
    const userPhotos = await axios.delete(
      `http://localhost:3010/deleteUserphoto/${index}`,
      { params: { email: user } }
    );

    this.setState({
      userPhoto: userPhotos.data,
    });
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
        <CardPhoto photo={this.state.data} deletePhoto={this.deletePhoto} />
      </div>
    );
  }
}

export default withAuth0(MyPhoto);
