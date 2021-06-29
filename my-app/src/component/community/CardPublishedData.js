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
      console.log(result.data);

      this.setState({
        publishedData: resultPublished,
      });
    });
  };

  test=(result)=>{

  }
  addcomment = async (e, item, value) => {
  
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
      console.log(result.data);
      this.setState ({
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
                < Card style={{ width: "23rem" }} className='pubCard' key={idx}>
                  <Card.Img variant="top" className='pubImg' src={value.url} />


                    <Card.Title className='by'> 👥 {value.name}</Card.Title>
                    <Card.Title className='by'>◾{value.title}</Card.Title>
        

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
                         <p class='commText'>{element.text}{" "}</p> 
                         <hr class='hrhr'></hr>
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
                <button class="btttn" type="submit" variant="primary" data-hover="Click!"><div>comment</div></button>
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

