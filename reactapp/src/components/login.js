import React from 'react';
import {Navigate} from "react-router-dom";



const login = () => {
  const handle = (e) => {
    return <Navigate to="/Home"></Navigate>
  }


  return (
    <div>
      <center>
        <h5> Login</h5>
        <form>
          <input type="text"  id="username" title="username" placeholder="username" /><br /><br />
          <input type="password"  id="password" title="username" placeholder="password" /><br /><br />
          <button type="submit"  id="loginButton" onClick={handle}>Login</button><br /><br />
          <a class="forgot" id="signupLink" href="signup">Forgot Username?</a><br /><br />
          <a class="forgot" id="signupLink" href="signup">Register</a>
        </form>
      </center>
    </div>
  );
}

export default login;
