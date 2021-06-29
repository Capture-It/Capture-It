import React, { Component } from "react";
// import { Card, Button, Accordion } from "react-bootstrap";
import CardColumns from "react-bootstrap/CardColumns";
import CardPhotos from "./CardPhoto.css"
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
              
            //   <div class="box">
            //   <div class="card">
            //     <div class="imgBx">
            //         <img src={item.url} alt="images"></img>
            //     </div>
            //     <div class="details">
            //         <h4>{item.title}<br/><span><button onClick={()=>this.props.deletePhoto(idx)}>Delete</button></span></h4>
            //     </div>
            //   </div>
            // </div>
            );
          })}
        </CardColumns>
      </div>
    );
  }
}

export default CardPhoto;

{/* 
// <Card style={{ width: "18rem" }} key={idx}>
// <Card.Img variant="top" src={item.url} />

// <Card.Body>
//   <Card.Title>{item.title}</Card.Title>
//   <Accordion defaultActiveKey="0">
//     <Accordion.Toggle as={Card.Header} eventKey="1">
//       Picture Description <br /> <br />
//       <small className="text-muted">
//         Click for Description
//       </small>
//     </Accordion.Toggle>
//     <Accordion.Collapse eventKey="1">
//       <Card.Body> {item.description} </Card.Body>
//     </Accordion.Collapse>
//   </Accordion>
// </Card.Body>
// <Button onClick={()=>this.props.deletePhoto(idx)}>Delete</Button>
// </Card> */}

////////////re do
{/* <>
              <div class="img-container">
                <img style={{ height: "493.067px", width: "500px", borderRadius: "5px", zIndex: "-1" }} src={item.url}></img>
              </div>
              <div class="text-container">
                <h4>{item.title}</h4>
                <p>{item.description}</p>

              </div>


              <section class="container">

                <button class="btttn" variant="primary" onClick={()=>this.props.deletePhoto(idx)}><div>Delete</div></button>

              </section>
            </> */}

//////from google

    // <div class="container">
    //     <div class="card">
    //         <div class="face face1">
    //             <div class="content">
    //                 <img src={{ height: "493.067px", width: "500px", borderRadius: "5px", zIndex: "-1" }} src={item.url}>
    //                 <h3>{item.title}</h3>
    //             </div>
    //         </div>
    //         <div class="face face2">
    //             <div class="content">
    //                 <p>{item.description}</p>
    //                 <button class="btttn" variant="primary" onClick={()=>this.props.deletePhoto(idx)}><div>Delete</div></button>
    //             </div>
    //         </div>
    //     </div>