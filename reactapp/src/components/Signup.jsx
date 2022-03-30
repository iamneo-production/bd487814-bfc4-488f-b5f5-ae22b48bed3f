import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import bgImg from "../images/backgroundimg.jpg";
import styled from "styled-components";
import { Link, useNavigate, Navigate } from "react-router-dom";
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

export class Signup extends Component {
  constructor() {
    super();
    this.state = {
      userFirstname: "",
      userLastname: "",
      userid: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // adminnavigate = (e) => {
  //   let navigate = useNavigate();
  //   navigate("/admin"); 
  // }

  userFirstnamehandler = (event) => {
    this.setState({
      userFirstname: event.target.value,
    });
  };

  userLastnamehandler = (event) => {
    this.setState({
      userLastname: event.target.value,
    });
  };

  useridhandler = (event) => {
    this.setState({
      userid: event.target.value,
    });
  };

  passwordhandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  //Notification for signup
  notify = (e) => toast(e);

  handleSubmit = (event) => {
    // <Link to="/admin "></Link>
    // event.preventDefault();
    //this.adminnavigate();

    
    let auth=false;
    if (this.state.password.toString().length <= 8) {
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
        userFirstname: this.state.userFirstname,
        userLastname: this.state.userLastname,
        userid: this.state.userid,
        password: this.state.password,
        
      };
      axios.post("http://localhost:8081/signup", user).then((res) => {
        this.notify("Registered Successfully!");
        // res =>{auth=true}
        this.if(res)
        {
          return <Link to="/login" />
        }
      });
    }
    event.preventDefault();
  };

  // if(auth){
  //   return <Navigate to="/login" />
  // }
  // const loginApi = () => {
  //   fetch("http://localhost:3000/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       firstname: userFirstname,
  //       lastname: userLastname,
  //       email: email,
  //       password: password,
  //       mobileNumber: mobileNumber,
  //       userid: userid,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.status === "success") {
  //         toast.success("Signup Successful");
  //         props.history.push("/login");
  //       } else {
  //         toast.error("Signup Failed");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // fetch("https://api.example.com/items")
  //     .then(res => res.json())
  //     .then(
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (mobileNumber.length != 10) {
  //     alert("Ivalid Phone number");
  //   }
  // };
  // const notify = () => toast.success("Registered successfully!");

  render() {
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
            <Form className="signup-form" onSubmit={this.handleSubmit}>
              <h1 className="text-center">Register</h1>
              <FormGroup>
                <Label>First Name</Label>
                <Input
                  type="text"
                  id="userFirstname"
                  placeholder="Enter First name"
                  value={this.state.userFirstname}
                  onChange={this.userFirstnamehandler}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Last Name</Label>
                <Input
                  type="text"
                  id="userLastname"
                  placeholder="Enter Last name"
                  value={this.state.userLastname}
                  onChange={this.userLastnamehandler}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>User ID</Label>
                <Input
                  type="text"
                  id="userid"
                  placeholder="Enter username"
                  value={this.state.userid}
                  onChange={this.useridhandler}
                  required
                />
              </FormGroup>
              {/* <FormGroup>
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
            </FormGroup> */}
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
  }
}
