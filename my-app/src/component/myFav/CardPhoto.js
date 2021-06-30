import React, { Component } from "react";
// import { Card, Button, Accordion } from "react-bootstrap";
import CardColumns from "react-bootstrap/CardColumns";
import  "./CardPhoto.css"
export class CardPhoto extends Component {
  render() {
    return (
      <div>
         
      <div class="overlay">
              <h2>My Favouraite Photos</h2>
              <p>Provided From CaptureIt</p>
              </div>
        <CardColumns>
          {this.props.photo.map((item,idx) => {
            
            return (
              <>
              <div class="img-container">
                <img style={{ height: "493.067px", width: "500px", borderRadius: "5px", zIndex: "-1" }} src={item.url}></img>
              </div>
              <div class="text-container">
                <h4>{item.title}</h4>
                

              </div>


              <section class="container">

                <button class="btttn" variant="primary" onClick={()=>this.props.deletePhoto(idx)} data-hover="Delete!"><div>Delete</div></button>

              </section>
            </>
            );
          })}
        </CardColumns>
      </div>
    );
  }
}

export default CardPhoto;
