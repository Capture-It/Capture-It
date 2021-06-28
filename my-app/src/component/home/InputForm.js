import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import "./InputForm.css"
export class InputForm extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.getPhoto}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Enter Picture Name</Form.Label> */}
            <Form.Control className="mb-4" type="text" placeholder="Enter Picture Name" name="photo" />
          </Form.Group>
          <button className="mb-5" variant="primary" type="submit">Search</button>
        </Form>

      </div>
    )
  }
}

export default InputForm
