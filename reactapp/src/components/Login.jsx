import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import bgImg from "../images/backgroundimg.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

//Frombox to style the form
const Formbox = styled.div`
  width: 350px;
  max-height: 400px;
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

function Login(props) {
  //Notification for successful login
  const notify = () => toast.success("Logged in successfully!");

  return (
    <div>
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
          <Form className="login-form">
            <h1 className="text-center">Login</h1>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="String"
                id="username"
                placeholder="Enter username"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter password"
                required
              />
            </FormGroup>
            <Button
              className="btn-lg btn-dark btn-block"
              id="loginButton"
              onClick={notify}
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

export default Login;
