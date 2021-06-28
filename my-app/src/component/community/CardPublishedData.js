import React, { Component } from "react";
import axios from "axios";
import { Card, Button, Accordion, Form } from "react-bootstrap";
import CardColumns from "react-bootstrap/CardColumns";
import { withAuth0 } from '@auth0/auth0-react';

export class CardPublishedData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publishedData: [],
    };
  }
  componentDidMount = () => {
    let url = "http://localhost:3010/getPublishedDataDB";
    axios.get(url).then((result) => {
      let resultPublished = result.data;
      console.log(resultPublished);
      this.setState({
        publishedData: resultPublished,
      });
    });
    console.log(this.state.publishedData);
  };

  addcomment = (e,item,value) => {
    e.preventDefault();
    const object={
        email:item.email,
       comment: e.target.comment.value,
       name:this.props.auth0.user.nickname,
       pic:this.props.auth0.user.picture,
       id:value._id
    }
    console.log(value._id);
    let url='http://localhost:3010/addCommentToDB';
    axios.post(url,object).then((result=>{
        console.log('edit comment');
        }))
  };

  render() {
    return (
      <div>
        <CardColumns>
          {this.state.publishedData.map((item, idx) => {
            return item.userPublishedData.map((value, idx) => {
              return (
                <Card style={{ width: "18rem" }} key={idx}>
                  <Card.Img variant="top" src={value.url} />

                  <Card.Body>
                    <Card.Title>By:{value.name}</Card.Title>
                    <Card.Title>{value.title}</Card.Title>
                    <Card.Body> {value.description} </Card.Body>
                    {value.comment.map((element, i) => {
                      return <Card.Body key={i}> {element.text} </Card.Body>;
                    })}
                  </Card.Body>

                  <Form onSubmit={(e) => this.addcomment(e,item,value)}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Comment"
                        name="comment"
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Card>
              );
            });
          })}
        </CardColumns>
      </div>
    );
  }
}

export default withAuth0(CardPublishedData);

//     <Card.Body> {value.description} </Card.Body>
// <Accordion defaultActiveKey="0">
//   <Accordion.Toggle as={Card.Header} eventKey="1">
//     Picture Description <br /> <br />
//     <small className="text-muted">
//       Click for Description
//     </small>
// </Accordion.Toggle>
// <Accordion.Collapse eventKey="1">

//     </Accordion.Collapse>
//     </Accordion>
{
  /* <Card.Body> {console.log( value.comment[idx])} </Card.Body> */
}
