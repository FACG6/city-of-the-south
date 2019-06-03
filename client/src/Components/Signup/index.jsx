import React, { Component } from 'react';
import './style.css';
import { Form, Button } from 'react-bootstrap';
import signupValidation from '../Helpers/validation';

export default class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confPassword: '',
    errormsg: '',
  };

  handleClick = e => {
    e.preventDefault();
    const { username, email, password, confPassword } = this.state;
    signupValidation(username, email, password, confPassword);
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password, confPassword } = this.state;
    return (
      <>
        <Form className="content-signup">
          <span className="content-signup__word-sigup">Sign Up</span>
          <Form.Group
            controlId="formBasicUsername"
            className="content-signup__input"
          >
            <Form.Label>
              Username : <span className="content-signup__star">*</span>
            </Form.Label>
            <Form.Control
              name="username"
              value={username}
              onChange={this.handleChange}
              type="username"
              placeholder="e.g: emily1234"
            />
          </Form.Group>

          <Form.Group
            controlId="formBasicEmail"
            className="content-signup__input"
          >
            <Form.Label>
              E-mail : <span className="content-signup__star">*</span>
            </Form.Label>
            <Form.Control
              name="email"
              value={email}
              onChange={this.handleChange}
              type="email"
              placeholder="example@mail.com"
            />
          </Form.Group>

          <Form.Group
            controlId="formBasicPassword"
            className="content-signup__input"
          >
            <Form.Label>
              Password : <span className="content-signup__star">*</span>
            </Form.Label>
            <Form.Control
              name="password"
              value={password}
              onChange={this.handleChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group
            controlId="formBasicPassword"
            className="content-signup__input"
          >
            <Form.Label>
              Confirm Password : <span className="content-signup__star">*</span>
            </Form.Label>
            <Form.Control
              name="confPassword"
              value={confPassword}
              onChange={this.handleChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="content-signup__submit"
            onClick={this.handleClick}
          >
            Submit
          </Button>
          <Form.Text className="content-signup__text-muted">
            Already have an account?{' '}
            <span className="content-signup__word-login">Login</span>
          </Form.Text>
        </Form>
      </>
    );
  }
}
