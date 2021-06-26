import React, { Component } from "react";
import CardPhoto from "./CardPhoto";
import axios from "axios";
import { withAuth0 } from '@auth0/auth0-react';

export class MyPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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
    let email = this.props.auth0.user.email;
    let url = `http://localhost:3010/getphoto?email=${email}`;
    axios.get(url).then((photoResult) => {
      let photoData = photoResult.data;
      this.setState({
        data: photoData,
      });
      console.log(this.state.data);
    });
  };
  render() {
    const {isAuthenticated,user }=this.props.auth0;
    return (
      <div>
        {isAuthenticated&&<h2>Welcome {user.name}</h2> }
        {/* <img src={user.picture} alt='t'/> */}
        <CardPhoto photo={this.state.data} deletePhoto={this.deletePhoto} />
      </div>
    );
  }
}

export default withAuth0(MyPhoto);
