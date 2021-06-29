import React, { Component } from "react";
import axios from "axios";
import { Card, Button, Accordion, Form, Image } from "react-bootstrap";
import CardColumns from "react-bootstrap/CardColumns";
import { withAuth0 } from "@auth0/auth0-react";
import "./CardPublished.css";

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
      this.setState({
        publishedData: resultPublished,
      });
    });
  };

  addcomment = (e, item, value) => {
    console.log(
      "🚀 ~ file: CardPublishedData.js ~ line 25 ~ CardPublishedData ~ value",
      value
    );
    e.preventDefault();
    const object = {
      email: item.email,
      comment: e.target.comment.value,
      name: this.props.auth0.user.nickname,
      pic: this.props.auth0.user.picture,
      id: value._id,
    };
    let url = "http://localhost:3010/addCommentToDB";
    axios.post(url, object).then((result) => {
      console.log("edit comment");
    });

    this.componentDidMount();
  };

  render() {
    return (
      <div>
        <CardColumns>
          {this.state.publishedData.map((item, idx) => {
            return item.userPublishedData.map((value, idx) => {
              return (
                < Card style={{ width: "23rem" }} className='pubCard' key={idx}>
                  <Card.Img variant="top" className='pubImg' src='https://upload.wikimedia.org/wikipedia/commons/1/16/Appearance_of_sky_for_weather_forecast%2C_Dhaka%2C_Bangladesh.JPG' />


                    <Card.Title className='by'> 👥 Nooraldeen khalaf</Card.Title>
                    <Card.Title className='by'>◾{value.title}</Card.Title>
                    <Card.Body className='by'> ◾{value.description} </Card.Body>

                    <Accordion defaultActiveKey="0">
                    <Accordion.Toggle className='view' as={Card.Header} eventKey="1">
                    💬 View Comment <br /> <br />
      
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                  <Card.Body>


                                        
                    {value.comment.map((element, i) => {
                      return (
                        <Card.Body  key={i} className='commCard'>
                          {" "}
                          <Image
                            src={element.url}
                            className="userimg"
                            roundedCircle
                          />
                          {` ${element.commenter}`}
                          <br />
                         <p className='commText'>{element.text}{" "}</p> 
                        </Card.Body>
                      );
                    })}

                  </Card.Body>
                     </Accordion.Collapse>
                      </Accordion>

                  <Form onSubmit={(e) => this.addcomment(e, item, value)}>
                    <Form.Group className="mb-3" controlId="formBasicPassword" >
                      <Form.Control 
                        as="textarea"
                        rows={3}
                        placeholder="Comment"
                        name="comment"
                      />
                    </Form.Group>
                    <section class="container">
                <button class="btttn" variant="primary" data-hover="Click!"><div>comment</div></button>
              </section>
                
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

{/* <Card.Body>
  {" "}
  <Card.Body key={i}>
    {" "}
    <Image src={element.url} className="userimg" roundedCircle />
    {` ${element.commenter}`}
    <br />
    {element.text}{" "}
  </Card.Body>{" "}
</Card.Body>;
     </Accordion.Collapse>
     </Accordion> */}
