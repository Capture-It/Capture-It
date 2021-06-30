import React, { Component } from "react";
import axios from "axios";
import { Card, Accordion, Form, Badge } from "react-bootstrap";
import CardColumns from "react-bootstrap/CardColumns";
import { withAuth0 } from "@auth0/auth0-react";
import "./CardPublished.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCalendar,
  faUser,
  faComment,
} from "@fortawesome/free-regular-svg-icons";
import Comments from "./Comments";

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
      console.log(result.data);

      this.setState({
        publishedData: resultPublished,
      });
    });
  };

  test = (result) => {};
  addcomment = async (e, item, value) => {
    e.preventDefault();
    const object = {
      email: item.email,
      comment: e.target.comment.value,
      name: this.props.auth0.user.nickname,
      pic: this.props.auth0.user.picture,
      id: value._id,
    };
    let url = `${process.env.REACT_APP_URL}/addCommentToDB`;
    axios.post(url, object).then((result) => {
      this.setState({
        publishedData: result.data,
      });
    });
  };

  addlike = (e, item, value) => {
    e.preventDefault();
    let object = {
      email: item.email,
      id: value._id,
    };

    let url = `${process.env.REACT_APP_URL}/addlike`;
    axios.post(url, object).then((result) => {
      this.setState({
        publishedData: result.data,
      });
    });
  };
  render() {
    return (
      <div>
        {console.log("reapete")}
        <CardColumns>
          {this.state.publishedData.map((item, idx) => {
            return item.userPublishedData.map((value, idx) => {
              return (
                
                <Card style={{ width: "27rem" }} className="pubCard" key={idx}>
                  

                  <Card.Img variant="top" src={value.url} height="500px" width="500px"/>
                  <Card.Body>
                    <Card.Title className="cardtitle">
                      <FontAwesomeIcon icon={faUser} /> {value.name}
                      <button className="closebutton"  title="Add Like"  onClick={(e) => this.addlike(e, item, value)}>
                      ❤️
                     {' '}{value.like} 
                  </button>
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      {console.log(value)}
                      <Badge class="combad" variant="secondary">
                        {value.title}
                      </Badge>{" "}
                      <Badge class="combad" variant="secondary">
                        {value.description}
                      </Badge>{" "}
                    </Card.Text>
                  </Card.Body>
                  <Accordion>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          className="view"
                          as={Card.Header}
                          eventKey="0"
                          style={{cursor: "pointer"}}
                        >
                          <FontAwesomeIcon icon={faComment} /> View Comment{" "}
                          <br /> <br />
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          {value.comment.map((element, i) => {
                            return (
                              <Comments
                                key={i}
                                username={element.commenter}
                                userimg={element.url}
                                posttime="Today at 6:00PM"
                                usercomment={element.text}
                              />
                            );
                          })}
                          <Form
                            onSubmit={(e) => this.addcomment(e, item, value)}
                          >
                            <Form.Group
                              className="fix"
                              controlId="formBasicPassword"
                            >
                              <Form.Control
                                as="textarea"
                                rows={2}
                                placeholder="Write a comment..."
                                name="comment"
                              />
                            </Form.Group>
                            <section class="container">
                              <button
                                class="btttn"
                                type="submit"
                                variant="primary"
                                data-hover="Click!"
                              >
                                <div>Post</div>
                              </button>
                            </section>
                          </Form>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
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
