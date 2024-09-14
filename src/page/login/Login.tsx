import React from "react";
import "./style.css"
import google from "../../google.png"
import GoogleLogin from '../../components/googleLogin/GoogleLogin';

export default function Login(){
    return(
        <>
            <div className="container">
                <div className="form-login">
                    <div className="content-form">
                        <div className="input">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="input">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="password" />
                        </div>
                        <button className="button-login">
                            Login
                        </button>
                    </div>
                    <div className="google">
                        <GoogleLogin/>
                    </div>

                    
                </div>

                

            </div>
        </>
    );
}