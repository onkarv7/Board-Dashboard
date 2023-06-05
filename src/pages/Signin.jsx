// import React, { useEffect, useState } from "react";
// import { auth, provider } from "./config";
// import { signInWithPopup } from "firebase/auth";
// import Home from "../components/Home";

// import { useNavigate } from "react-router-dom";

// import "./SignUpUi.css";
// function SignIn() {
//   const [value, setValue] = useState("");

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();
//   const handleClick = () => {
//     signInWithPopup(auth, provider).then((data) => {
//       setValue(data.user.email);
//       localStorage.setItem("email", data.user.email);
//     });
//   };

//   useEffect(() => {
//     setValue(localStorage.getItem("email"));
//   });

//   const handleSignIn = () => {
//     navigate("/dashboard");
//   };

//   const handlchange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlchangePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   return (
//     <div>
//       {/* {value ? (
//         { */}

//       {/* } */}
//       {/* ) : ( */}
//       <div className="login">
//         <div>
//           <div className="left">
//             <p className="board"> Board.</p>
//           </div>
//         </div>
//         <div className="right">
//           <div className="sign_in">
//             <p className="sign_in_text"> Sign in</p>
//             <p className="sign_in_subtext">Sign in to your account</p>
//             <div className="authbuttons">
//               <button className="googlebtn" onClick={handleClick}>
//                 Sign in with Google
//               </button>
//               <button className="applebtn">Sign in with Apple</button>
//             </div>
//             {/* box */}
//             <div className="sign_form">
//               <div>
//                 <div>
//                   <label className="email_label" htmlFor="email">
//                     Email Address
//                   </label>
//                 </div>

//                 <input
//                   type="text"
//                   value={email}
//                   id="email"
//                   placeholder="xyz@gmail.com"
//                   onChange={{ handlchange }}
//                 />
//               </div>
//               <div>
//                 <div>
//                   {" "}
//                   <label className="password_label" htmlFor="password">
//                     Password
//                   </label>
//                 </div>

//                 <input
//                   type="password"
//                   id="password"
//                   value={password}
//                   placeholder="********"
//                   onChange={{ handlchangePassword }}
//                 />
//               </div>
//               <p className="forget">Forget password?</p>
//               <button onClick={handleSignIn} className="signbtns">
//                 Sign In
//               </button>
//             </div>
//             <p className="no_account">
//               Don't have an account?
//               <span className="register_text">Register here</span>
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* )} */}
//     </div>
//   );
// }
// export default SignIn;

import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import Home from "../components/Home";
import { useNavigate } from "react-router-dom";

import "./SignUpUi.css";

function SignIn() {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  const handleSignIn = () => {
    // Perform email and password validation
    if (email === "") {
      setEmailError("Please enter an email");
    } else {
      setEmailError("");
    }

    if (password === "") {
      setPasswordError("Please enter a password");
    } else {
      setPasswordError("");
    }

    // If email and password are valid, proceed to sign in
    if (email && password) {
      navigate("/dashboard");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
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
            <div className="sign_form">
              <div>
                <div>
                  <label className="email_label" htmlFor="email">
                    Email Address
                  </label>
                </div>
                <input
                  type="text"
                  value={email}
                  id="email"
                  placeholder="xyz@gmail.com"
                  onChange={handleEmailChange}
                />
                {emailError && <p className="error">{emailError}</p>}
              </div>
              <div>
                <div>
                  <label className="password_label" htmlFor="password">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  placeholder="********"
                  onChange={handlePasswordChange}
                />
                {passwordError && <p className="error">{passwordError}</p>}
              </div>
              <p className="forget">Forget password?</p>
              <button onClick={handleSignIn} className="signbtns">
                Sign In
              </button>
            </div>
            <p className="no_account">
              Don't have an account?
              <span className="register_text">Register here</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
