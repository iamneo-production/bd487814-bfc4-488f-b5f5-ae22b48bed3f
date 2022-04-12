import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import bgImg from "../images/backgroundimg.jpg";
import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";
import "./scrollbar.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

//Frombox to style the form
const Formbox = styled.div`
  width: 350px;
  max-height: 600px;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 15px;
  margin: auto;
  height: 80%;
  top: 100px;
  text-align: left;
  color: rgb(0, 0, 0);
  box-shadow: 0 0 10px;
  position: relative;
  overflow-y: scroll;
  font-family: Fredoka;
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.8);
  scrollbar-width: 0px;
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

const Signup = () => {
  const notify = (e) => toast(e);
  const [data, setData] = useState({
    email: "",
    mobileNumber: "",
    username: "",
    password: "",
  });

  const { email, mobileNumber, username, password } = data;
  const [valid, setValid] = useState(false);
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
   
  
    
    axios.post("http://localhost:8080/signup", data).then((res) => {
      if (res.data) {
        setValid(true);
      } else {
        notify("Registration unsuccessful");
      }
    });
  };
  if (valid) {
    return <Navigate to="/login" />;
  }

  return (
    <div id="signupBox">
      <Container>
        <Formbox className="scrollbar scrollbar-juicy-peach">
          <Formlogo>
            <img
              src={require("../images/PhotoFramed-logos_black.png")}
              alt="Logo"
              border-radius={100}
              width={70}
              height={70}
            />
          </Formlogo>
          <Form className="signup-form" onSubmit={submitHandler}>
            <h1 className="text-center">Register</h1>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="text"
                id="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={changeHandler}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Mobile Number</Label>
              <Input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Enter Mobile Number"
                value={mobileNumber}
                onChange={changeHandler}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>User name</Label>
              <Input
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
                value={username}
                onChange={changeHandler}
                required
              />
            </FormGroup>
            {}
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={changeHandler}
                required
              />
            </FormGroup>
            <Button
              className="btn-lg btn-dark btn-block"
              id="submitButton"
              type="submit"
            >
              Register
            </Button>
            <div className="text-center">
              {/* <a href="/signup">Existing user? Sign in</a> */}
              <Link to="/login">Existing user? Sign in</Link>
            </div>
          </Form>
        </Formbox>
      </Container>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default Signup;
