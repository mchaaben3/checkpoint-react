import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {Form,Button,FloatingLabel,Col,Image } from 'react-bootstrap';
import logo from './logo-og.png'; 


function App() {
  return (
    <div className="App">
      <div className="Container">
      <h1>Checkpoint React</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        <Form.Group className="mb-3">
   <Form.Label>Mission</Form.Label>
           <FloatingLabel controlId="floatingSelect" label="Works with selects">

              <Form.Select aria-label="Floating label select example">
                <option>Open this select menu</option>
                <option value="Student">Student</option>
                <option value="Instructor">Instructor</option>
         
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
