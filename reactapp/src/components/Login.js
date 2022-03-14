import React from 'react';
import {Navigate} from "react-router-dom";



const Login = () => {
  const handle = (e) => {
    return <Navigate to="/Home"></Navigate>
  }


  return (
    <div>
      <center>
        <h5> Login</h5>
        <form>
          <input type="text" title="username" placeholder="username" /><br /><br />
          <input type="password" title="username" placeholder="password" /><br /><br />
          <button type="submit" onClick={handle}>Login</button><br /><br />
          <a class="forgot" href="Register">Forgot Username?</a><br /><br />
          <a class="forgot" href="Register">Register</a>
        </form>
      </center>
    </div>
  );
}

export default Login;
