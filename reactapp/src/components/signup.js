import React, { useState } from "react";
import { Link} from "react-router-dom";

function Signup() {
    const [showpasswordtype, setpasswordtype] = useState("password");
    const [userName, setUserName] = useState('');
    const [userlastname, setlastname] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [UserConfirmPassword, setUserConfirmPassword] = useState('');
    const [UserPhonenumber, setUserPhonenumber] = useState('');

    const handleSubmit = async (e) => {

        e.preventDefault();
        if (UserPhonenumber.length === 10) {
            //alert("Phone number");

        }
        else {
            alert("Ivalid Phone number");
        }
    }

    // const Submitvalue = (e) => {
    //     // const history = useHistory();
    //     // const navigateTo = () => history.push('/Home');
    // }



    return (
        <>
            <center>
                <h5> signup</h5>
                <form onSubmit={handleSubmit}>
                    First Name : <input type="text" placeholder="Enter Name" name="name" onChange={e => setUserName(e.target.value)} /><br /><br />
                    Last Name : <input type="text" placeholder="Enter your last namer" name="lastname" onChange={e => setlastname(e.target.value)} /><br /><br />
                    Email : <input type="email" placeholder="Enter Email Id" name="email" onChange={e => setUserEmail(e.target.value)} /><br /><br />
                    Phone Number : <input type="text" placeholder="Enter your Phone Number" name="phonenumber" onChange={e => setUserPhonenumber(e.target.value)} /><br /><br />
                    Password : <input type={showpasswordtype} placeholder="Enter Password" name="password" onChange={e => setUserPassword(e.target.value)} /><br /><br />
                    Confirm Password : <input type={showpasswordtype} placeholder="Enter Password" name="password" onChange={e => setUserConfirmPassword(e.target.value)} />
                    <input type="checkbox" onClick={(e) => {
                        if (showpasswordtype === "password") {
                            setpasswordtype("text");
                        } else if (showpasswordtype === "text") {
                            setpasswordtype("password");
                        }
                    }} />Show Password
                    <br /><br />
                    <button  type="button" ><a class="forgot" href="image"> Submit</a></button>
                </form>
                <Link to="/login">Login</Link>
            </center>
        </>
    );
}

export default Signup;