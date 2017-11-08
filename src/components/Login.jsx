import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  loginToFb = (username, password) => {
    this.props.onLogin({ username, password }).then(res => {
      this.props.login(true);
    });
  };

  render() {
    return (
      <Form
        onSubmit={e => {
          e.preventDefault();
          this.loginToFb(this.state.username, this.state.password);
        }}
      >
        <FormGroup>
          <Label for="emailInput">Email</Label>
          <Input
            id="emailInput"
            type="email"
            name="email"
            value={this.state.username}
            onChange={this.handleUsernameChange}
            placeholder="johndoe@gmail.com"
          />
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            placeholder="Password"
          />
        </FormGroup>

        <Button color="primary" size="lg" block type="submit">
          Login
        </Button>

        <Button
          onClick={() => this.props.skipLogin()}
          outline
          color="secondary"
          size="sm"
          block
          type="button"
        >
          Skip login (only save locally)
        </Button>
      </Form>
    );
  }
}

export default Login;
