import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import bgImg from "../images/backgroundimg.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./scrollbar.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

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

function Signup(props) {
  const [userFirstname, setFirstname] = useState("");
  const [userLastname, setLastname] = useState("");
  const [userid, setuserid] = useState("");
  const [email, setemail] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mobileNumber.length != 10) {
      alert("Ivalid Phone number");
    }
  };

  const notify = () => toast.success("Registered successfully!");

  return (
    <div id={props.id}>
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
          <Form>
            <h1 className="text-center">Register</h1>
            <FormGroup>
              <Label>First Name</Label>
              <Input
                type="text"
                id="userFirstname"
                placeholder="Enter First name"
                value={userFirstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Last Name</Label>
              <Input
                type="text"
                id="userLastname"
                placeholder="Enter Last name"
                value={userLastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>User ID</Label>
              <Input
                type="text"
                id="userid"
                placeholder="Enter username"
                value={userid}
                onChange={(e) => setuserid(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Email ID</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter email id"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Mobile number</Label>
              <Input
                type="number"
                id="mobileNumber"
                placeholder="Enter mobile number"
                value={mobileNumber}
                onChange={(e) => setmobileNumber(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </FormGroup>
            <Button
              className="btn-lg btn-dark btn-block"
              id="submitButton"
              onClick={notify}
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
}

export default Signup;
