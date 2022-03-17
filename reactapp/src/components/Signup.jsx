import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import bgImg from "../images/backgroundimg.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

function Signup(props) {
  return (
    <div id={props.id}>
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
          <Form className="signup-form">
            <h1 className="text-center">Register</h1>
            <FormGroup>
              <Label>First Name</Label>
              <Input
                type="String"
                id="userFirstname"
                placeholder="Enter First name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Last Name</Label>
              <Input
                type="String"
                id="userLastname"
                placeholder="Enter Last name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>User ID</Label>
              <Input
                type="String"
                id="userid"
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
            <button className="btn-lg btn-dark btn-block" id="submitButton">
              Register
            </button>
            <div className="text-center">
              {/* <a href="/signup">Existing user? Sign in</a> */}
              <Link to="/login">Existing user? Sign in</Link>
            </div>
          </Form>
        </Formbox>
      </Container>
    </div>
  );
}

export default Signup;
