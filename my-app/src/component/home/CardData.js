import React, { Component } from "react";
import { Card, Button ,Accordion} from "react-bootstrap";
import CardColumns from 'react-bootstrap/CardColumns';
import './CardData.css'

export class CardData extends Component {
  render() {
    return (
      <div>
        <CardColumns>
        {this.props.data.map((item,idx)=>{
          return(
        <Card style={{ width: "18rem" }} key={idx}>
          <Card.Img variant="top" src={item.imagel}   />
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

            <Button variant="primary" onClick={()=>this.props.test(item.title,item.description,item.imagel)}>Add To My Photo</Button>
          </Card.Body>
        </Card>

          )
        })}
        </CardColumns>
      </div>
    );
  }
}

export default CardData;


            // <Card.Text>
            //  {item.description}
            // </Card.Text>