import React, { Component } from "react";
import axios from "axios";
import CardPhoto from "./CardPhoto";
import { withAuth0 } from '@auth0/auth0-react';


export class Myfavourite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = async () => {
    console.log("heeer");
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
  };

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
  render() {
    return (
      <div>
        <CardPhoto photo={this.state.data} deletePhoto={this.deletePhoto} />
      </div>
    );
  }
}

export default withAuth0(Myfavourite);
