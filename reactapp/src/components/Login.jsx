import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import bgImg from "../images/backgroundimg.jpg";
import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";
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

//Save the token from the response
export function saveresp(res, email) {
  sessionStorage.setItem("token", res.data.token);
  sessionStorage.setItem("userEmail", email);
}

const Login = () => {
  const notify = (e) => toast(e);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;
  const [authadmin, setAuthadmin] = useState(false);
  const [authuser, setAuthuser] = useState(false);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // if (password.toString() === "admin" && email.toString() === "admin") {
    //   console.log(data);
    //   axios.post("http://localhost:8081/login", data).then((res) => {
    //     if (res.status) {
    //       setAuthadmin(true);
    //       notify("Logged in as Admin");
    //     }
    //   });
    // } else if (password.toString().length <= 8) {
    //   alert(`Password must contain atleast 8 characters.`);
    // } else if (
    //   password.search(/[0-9]/) === -1 ||
    //   password.search(/[a-z]/) === -1 ||
    //   password.search(/[A-Z]/) === -1 ||
    //   //eslint-disable-next-line
    //   password.search(
    //     /[!\@\#\$\^\&\*\(\)\+\=\-\/\?\.\,\>\<\}\{\]\[\'\"\;\:\]\}\{\`\~]/
    //   ) === -1
    // ) {
    //   alert(
    //     `Password must contain atleast 1 number, 1 Uppercase, 1 Lowercase and 1 Special character.`
    //   );
    // } else {
    //   console.log(data);
    //   axios.post("http://localhost:8081/login", data).then((res) => {
    //     if (res.status) {
    //       setAuthuser(true);
    //       saveresp(res);
    //       notify("Logged in as User");
    //     } else {
    //       notify("Invalid Credentials");
    //     }
    //   });
    // }

    // console.log(data);
    axios.post("http://localhost:8080/login", data).then((res) => {
      if (res.data.status) {
        saveresp(res, data.email);
        if (res.data.role === "ROLE_ADMIN") {
          setAuthadmin(true);
        } else {
          setAuthuser(true);
        }
      } else {
        notify("Invalid Credentials");
      }
    });
  };

  if (authadmin) {
    return <Navigate to="/admin" />;
  }
  if (authuser) {
    return <Navigate to="/home" />;
  }

  return (
    <>
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
            <Form className="login-form" onSubmit={submitHandler}>
              <h1 className="text-center">Login</h1>
              <FormGroup>
                <Label>Username</Label>
                <Input
                  type="String"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={changeHandler}
                  required
                />
              </FormGroup>
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
                type="submit"
                id="loginButton"
                //onClick={notify("error")}
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
    </>
  );
};

export default Login;