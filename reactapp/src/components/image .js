import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { confirm } from "react-confirm-box";
import "./image.css";

export default function Image() {

    let navigate =useNavigate(); 
    const options = {
        labels: {
            confirmable: "Confirm",
            cancellable: "Cancel"
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await confirm("Are you sure?", options);
        if (result) {
            navigate("/login")
        }

    }

   
    return (

        <div>
            <div className="navigation">
                <div className="logo">
                    <Link className="no-underline" to="/home">
                        Photo Frame
                    </Link>
                </div>
                <div className="navigation-search-container">
                    <i className="fa fa-search" />
                    <input className="search-field" type="text" placeholder="Search" />
                    <div className="search-container">
                        <div className="search-container-box">
                            <div className="search-results">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navigation-icons">
                    <Link to="#" className="navigation-link">
                        <i className="far fa-compass" />
                    </Link>
                    <Link to="/uploadimg" className="navigation-link notifica">
                        <i className="fa fa-plus" aria-hidden="true"/>
                    </Link>
                    <Link to="/profile" className="navigation-link">
                        <i className="far fa-user-circle" />
                    </Link>
                    <Link to="/home" onClick={handleSubmit} id="signout" className="navigation-link" >
                        <i className="fas fa-sign-out-alt" />
                    </Link>
                </div>
            </div>
            <hr></hr>
        </div>
        
    );
}
