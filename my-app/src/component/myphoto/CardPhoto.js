import React, { Component } from "react";
import { Card, Button, Accordion } from "react-bootstrap";
import CardColumns from "react-bootstrap/CardColumns";

export class CardPhoto extends Component {
  render() {
    return (
      <div>
        <CardColumns>
          {this.props.photo.map((item,idx) => {
            return (
              <Card style={{ width: "18rem" }} key={idx}>
                <Card.Img variant="top" src={item.url} />

                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      Picture Description <br /> <br />
                      <small className="text-muted">
                        Click for Description
                      </small>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body> {item.description} </Card.Body>
                    </Accordion.Collapse>
                  </Accordion>
                </Card.Body>
                <Button onClick={()=>this.props.deletePhoto(idx)}>Delete</Button>
              </Card>
            );
          })}
        </CardColumns>
      </div>
    );
  }
}

export default CardPhoto;
