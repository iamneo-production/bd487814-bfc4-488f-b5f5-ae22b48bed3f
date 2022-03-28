import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import bgImg from "../images/backgroundimg.jpg";
import styled from "styled-components";
import { Link,Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

//Frombox to style the form
const Formbox = styled.div`
  width: 350px;
  max-height: 420px;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 15px;
  margin: auto;
  height: 100%;
  top: 200px;
  text-align: left;
  color: rgb(0, 0, 0);
  box-shadow: 0 0 10px;
  position: relative;
  overflow: hidden;
  font-family: Fredoka;
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.8);
`;

// Container to style and hold Form and logo
const Container = styled.div`
  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  position: absolute;
`;

//Formlogo for Logo style in the form
const Formlogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  usernamehandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  passwordhandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  //Notification for login
  notify = (e) => toast(e);

  handleSubmit = (event) => {
if((this.state.username==="admin") && (this.state.password.toString()==="admin")){
  //this.toast.success("Logged in Successfully as admin!");
  console.log("Hello mawa");
      const user = {
        username: this.state.username,
        password: this.state.password,
      };
  
}
      else if (this.state.password.toString().length <= 8) {
      alert(`Password must contain atleast 8 characters.`);
    } else if (
      this.state.password.search(/[0-9]/) === -1 ||
      this.state.password.search(/[a-z]/) === -1 ||
      this.state.password.search(/[A-Z]/) === -1 ||
      this.state.password.search(
        /[!\@\#\$\^\&\*\(\)\+\=\-\/\?\.\,\>\<\}\{\]\[\'\"\;\:\]\}\{\`\~]/
      ) === -1
    ) {
      alert(
        `Password must contain atleast 1 number, 1 Uppercase, 1 Lowercase and 1 Special character.`
      );
    } else {
      console.log(this.state);
      const user = {
        username: this.state.username,
        password: this.state.password,
      };
      axios.post("http://localhost:8081/login", user).then((res) => {
        this.notify("Logged in Successfully!");
        this.if(res)
        {
          return <Navigate to="/home" />
        }
      });
    }

    event.preventDefault();

    // axios
    //   .post("http://localhost:8081/", user)
    //   .then((response) => {
    //     console.log(response);
    //     // this.setState({userId:response.data.userId})
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  render() {
    return (
      <div id="loginBox">
        <Container>
          <Formbox>
            <Formlogo>
              <img
                src={require("../images/PhotoFramed-logos_black.png")}
                alt="Logo"
                border-radius={100}
                width={70}
                height={70}
              />
            </Formlogo>
            <Form className="login-form" onSubmit={this.handleSubmit}>
              <h1 className="text-center">Login</h1>
              <FormGroup>
                <Label>Username</Label>
                <Input
                  type="String"
                  id="username"
                  placeholder="Enter username"
                  value={this.state.username}
                  onChange={this.usernamehandler}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.passwordhandler}
                  required
                />
              </FormGroup>
              <Button
                className="btn-lg btn-dark btn-block"
                type="submit"
                id="loginButton"
                // onClick={this.notify}
              >
                Login
              </Button>
              <div className="text-center">
                <Link to="/signup">New user? Sign up</Link>
                <span className="p-2">|</span>
                <Link to="/signup">Forgot password</Link>
              </div>
            </Form>
          </Formbox>
        </Container>
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
