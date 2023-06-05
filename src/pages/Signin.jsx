import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import Home from "../components/Home";
import "./SignUpUi.css";
function SignIn() {
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <div>
      {value ? (
        <Home />
      ) : (
        /* <div>
          <SignUpUi />
          <button onClick={handleClick}>Signin With Google</button>
        </div> */

        <div className="login">
          <div>
            <div className="left">
              <p className="board"> Board.</p>
            </div>
          </div>
          <div className="right">
            <div className="sign_in">
              <p className="sign_in_text"> Sign in</p>
              <p className="sign_in_subtext">Sign in to your account</p>
              <div className="authbuttons">
                <button className="googlebtn" onClick={handleClick}>
                  Sign in with Google
                </button>
                <button className="applebtn">Sign in with Apple</button>
              </div>
              {/* box */}
              <div className="sign_form">
                <div>
                  <div>
                    <label className="email_label" htmlFor="email">
                      Email Address
                    </label>
                  </div>

                  <input type="text" id="email" placeholder="xyz@gmail.com" />
                </div>
                <div>
                  <div>
                    {" "}
                    <label className="password_label" htmlFor="password">
                      Password
                    </label>
                  </div>

                  <input type="password" id="password" placeholder="********" />
                </div>
                <p className="forget">Forget password?</p>
                <button className="signbtns">Sign In</button>
              </div>
              <p className="no_account">
                Don't have an account?
                <span className="register_text">Register here</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default SignIn;
