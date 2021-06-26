import React, { Component } from "react";
import InputForm from "./InputForm";
import axios from "axios";
import CardData from "./CardData";
import { withAuth0 } from '@auth0/auth0-react';

export class Home extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      photoData: [],
      picData: {},
      flag:true
    };
  }

   getRandomIntInclusive=()=> {
    let min =0
    let max = 8
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
//http://localhost:3010/initdb?
addUserToDB=async ()=>{
  const email= this.props.auth0.user.email;
  console.log(email);
  let obj={email};

  let url = `http://localhost:3010/initdb`;
    axios.post(url,obj ).then((result) => {
      console.log('done');
      this.setState({
        flag:false

      })
    });



}
  componentDidMount= async () => {

    let random=this.getRandomIntInclusive();
    try {
      let photoName = ['cat','car','person','movie','london','people','toys','tree','new york'];

      console.log(photoName);
      let url = `http://localhost:3010/photo?photoName=${photoName[random]}`;
      let photoResult = await axios.get(url);
      this.setState({
        photoData: photoResult.data,
        name: photoName,
      });
      console.log(photoResult.data);
    } catch (e) {
      console.log(e);
    }

    if( this.props.auth0.isAuthenticated){
        
        this.addUserToDB();
    }

    
    
  };

  searchPhoto = async (event) => {
    event.preventDefault();
    try {
      let photoName = event.target.photo.value;
      console.log(photoName);
      let url = `http://localhost:3010/photo?photoName=${photoName}`;
      let photoResult = await axios.get(url);
      this.setState({
        photoData: photoResult.data,
        name: photoName,
      });
      console.log(photoResult.data);
    } catch (e) {
      console.log(e);
    }
  };
  
  sendPhoto = async (title, des, imgUrl) => {
    let email=this.props.auth0.user.email;
    
    await this.setState({
      picData: { title, des, imgUrl,email }
    });
 
    let url = `http://localhost:3010/addPhoto`;
    axios.post(url, this.state.picData).then((result) => {
      console.log('done');
      
    });

  
    
    



    console.log(this.state.picData);
  };

  render() {
    const { isAuthenticated, user } = this.props.auth0;

    return (
      <div>
        {/* {isAuthenticated && this.state.flag && this.addUserToDB()} */}

        <InputForm getPhoto={this.searchPhoto} />
        <CardData data={this.state.photoData} test={this.sendPhoto} />
      </div>
    );
  }
}

export default withAuth0(Home);
