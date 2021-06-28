import React, { Component } from 'react'
import { Card, Button, Accordion, Modal, Form } from "react-bootstrap";
import CardColumns from "react-bootstrap/CardColumns";

export class Carduserphoto extends Component {
  render() {
    return (
      <div>
        <CardColumns>
          {this.props.userphoto.map((item, idx) => {
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
                <Button onClick={() => this.props.deletePhoto(idx)}>Delete</Button>
                <Button onClick={() => this.props.updatePhoto(idx)}>Update</Button>
              </Card>


            );
          })}

        </CardColumns>

        <Modal show={this.props.showUpdate} onHide={this.props.handleCloseUpadate}>
          <Modal.Header closeButton>
            <Modal.Title>Update your photo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.props.updatePhotoHandler(e)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Photo Name</Form.Label>
                <Form.Control type="text" name='photoName' onChange={(e) => this.props.nameChange(e)} value={this.props.photoName} />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>description</Form.Label>
                <Form.Control type="text" name='description' onChange={(e) => this.props.descriptionChange(e)} value={this.props.description} />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={this.props.handleCloseUpadate}>
                Update
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default Carduserphoto
