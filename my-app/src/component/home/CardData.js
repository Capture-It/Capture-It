import React, { Component } from "react";
import { Card, Button, Accordion } from "react-bootstrap";
import CardColumns from 'react-bootstrap/CardColumns';
import './CardData.css'
export class CardData extends Component {
  render() {
    return (
      <div>
        <CardColumns>
          {this.props.data.map((item, idx) => {
            return (
              <Card style={{ width: "18rem" }} key={idx}>
                <Card.Img variant="top" src={item.imagel} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      Picture Description <br /> <br />
                      <small className="text-muted">Click for Description</small>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>     {item.description} </Card.Body>
                    </Accordion.Collapse>
                  </Accordion>
                </Card.Body>
                <Button variant="primary" onClick={() => this.props.sendphoto(item.title, item.description, item.imagel)}>Add To My Photo</Button>
              </Card>
              // <img src={item.imagel} alt="jlk"/>
            )
          })}
        </CardColumns>
      </div>
    );
  }
}
export default CardData;


{/* <h2>{item.title}</h2> */ }
{/* <img style={{ zIndex: '-1' }} src={item.imagel}></img> */ }
{/* <button variant="primary" onClick={() => this.props.sendphoto(item.title, item.description, item.imagel)}>Add To My Photo</button> */ }

{/* ////////nura */ }
{/* <div class="a-box">
                <div class="img-container">
                  <div class="img-inner">
                    <div class="inner-skew">
                      <img src={item.imagel}></img>
                    </div>
                  </div>
                </div>
                <div class="text-container">
                  <h3>{item.title}</h3>
                  <div>
                    <button variant="primary" onClick={() => this.props.sendphoto(item.title, item.description, item.imagel)}>Add To My Photo</button>
                  </div>
                </div>
              </div> */}

// <Card style={{ width: "18rem" }} key={idx}>
//   <Card.Img variant="top" src={item.imagel} />
//   <Card.Body>
//     <Card.Title>{item.title}</Card.Title>
//     <Accordion defaultActiveKey="0">
//       <Accordion.Toggle as={Card.Header} eventKey="1">
//         Picture Description <br /> <br />
//         <small className="text-muted">Click for Description</small>
//       </Accordion.Toggle>
//       <Accordion.Collapse eventKey="1">
//         <Card.Body>     {item.description} </Card.Body>
//       </Accordion.Collapse>
//     </Accordion>

//     <Button class="ticket__buy-btn" variant="primary" onClick={() => this.props.sendphoto(item.title, item.description, item.imagel)}>Add To My Photo</Button>
//   </Card.Body>
// </Card>


////////lastone

// <div class="hero-container">
// <div class="main-container">
//   <div class="poster-container">
//     <a href="#"><img style={{ height: "400px", width: "200%", }} src={item.imagel} class="poster" /></a>
//   </div>
//   <div class="ticket-container">
//     <div class="ticket__content">
//       <h4 class="ticket__movie-title">{item.title}</h4>


//       <button class="ticket__buy-btn" variant="primary" onClick={() => this.props.sendphoto(item.title, item.description, item.imagel)}>Add To My Photo</button>
//     </div>
//   </div>
// </div>
// </div>
