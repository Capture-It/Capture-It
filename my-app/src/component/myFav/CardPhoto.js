import React, { Component } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import  "./CardPhoto.css"
export class CardPhoto extends Component {
  render() {
    return (
      <div>
         
      <div className="overlay">
              <h2 style={{marginTop:"15%", textAlign:"center" }}>My Favouraite Photos</h2>
              
              </div>
        <CardColumns>
          {this.props.photo.map((item,idx) => {
            
            return (
              <>
              <div className="maindiv">
                <img style={{ height: "493.067px", width: "500px", borderRadius: "5px", zIndex: "-1" }} src={item.url} alt="pic"></img>
                <h4>{item.title}</h4>
                <button className="btttn" variant="primary" onClick={()=>this.props.deletePhoto(idx)} data-hover="Delete!"><div>Delete</div></button>
              </div>
            </>
            );
          })}
        </CardColumns>
      </div>
    );
  }
}

export default CardPhoto;
