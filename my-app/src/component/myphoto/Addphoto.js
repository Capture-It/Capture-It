import React, { Component } from 'react'
import { Form, Button, Modal } from "react-bootstrap";

export class Addphoto extends Component {
    constructor(props){
        super(props);
        this.state={
            show:false
        }
    }

    closemodal=()=>{
        this.setState({
            show:!this.state.show,
        })
    }
    // getdata=()=>{
    //     // e.preventDefault();
    //     // let object = {
    //     //     title: e.target.title.value,
    //     //     description: e.target.des.value,
    //     //     imgurl: e.target.imgurl.value,
    //     //   };
    //     //   console.log(object);
    //     //   this.props.getInfo(object);
    //     console.log('tesssssssssssst');
    // }
    getdata=()=>{
       
        console.log('tesssssssssssst');
        // let object = {
        //     name: event.target.book.value,
        //     description: event.target.des.value,
        //     status: event.target.Status.value,
        //   };
        // //   console.log(object);
        //   this.props.modifyBook(object);
    }
    render() {
        return (

            <div>
                 <Button variant="primary" size="lg" onClick={this.closemodal} className="button1" active>Add Picture</Button>

                 <Modal show={this.state.show} onHide={this.closemodal}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {this.props.title1}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={this.props.getInfo}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Book Name" name="title" required />
                <Form.Text className="text-muted">
                  Pleas add your Photo.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description </Form.Label>
                <Form.Control type="text" placeholder="Description" name="des" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Link For Photo </Form.Label>
                <Form.Control type="text" placeholder="Photo Link" name="imgurl" required />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={this.closemodal}>
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button onClick={this.close}>Close</Button> */}
          </Modal.Footer>
        </Modal>


                
            </div>
        )
    }
}

export default Addphoto
