import React, { useState } from "react";
import "./Register.css";
import { useHistory } from "react-router-dom";
const Register = () => {
    const [signUpBtnClick, setSignUpBtnClick] = useState (false);
    const history = useHistory();

    return(
        <div className = {`container ${signUpBtnClick ? "sign-up-mode" : ""}`}>
            <div className = "form-container">
                <div className = "signin-signup">
                    <form action = "" className = "sign-in-form">
                        <h2 className = "title">Sign in </h2>
                        <div className = "input-field">
                            <input type = "text" placeholder = "Username"/>
                        </div>
                        <div className = "input-field">
                            <input type = "password" placeholder = "Password"/>
                        </div>
                        <input type = "submit" value = "Login" className = "btn solid" onClick={() => history.push("/")} />
                        <div className="social-media">
                        </div>
                    </form>

                    <form action = "" className = "sign-up-form">
                        <h2 className = "title">Sign up </h2>
                        <div className = "input-field">
                            <input type = "text" placeholder = "Email"/>
                        </div>
                        <div className = "input-field">
                            <input type = "password" placeholder = "Password"/>
                        </div>
                        <input type = "submit" value = "Sign up" className = "btn solid" onClick={() => history.push("/")} />
                        <div className="social-media">
                        </div>
                    </form>
                </div>
            </div>
            <div className = "panels-container">
                <div className = "panel left-panel">
                    <div className = "content">
                        <h3>New here ?</h3>
                        <p>If you dont have any Account, click below to Sign Up</p>
                        <button className="btn transparent" id="sign-up-btn" onClick={() => setSignUpBtnClick(true)}>Sign up</button>
                    </div>
                </div>
                <div className = "panel right-panel">
                    <div className = "content">
                        <h3>One of us ?</h3>
                        <p>To keep connected with us please login with your personal info,
                           Please click below to Sign In</p>
                        <button className="btn transparent" id="sign-in-btn" onClick={() => setSignUpBtnClick(false)}>Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
