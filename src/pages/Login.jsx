import React from "react";
import { Link } from "react-router-dom";
import {
  CenterForm,
  FormWrapper,
  InputGroup,
  LoginRegisterFooter,
  LoginRegisterForm,
} from "../components/StyledComponents";
import { auth } from "../services/auth0.service";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Auth0 login stuff
    auth.login(
      {
        username: email,
        password: password,
        realm: import.meta.env.VITE_AUTH0_REALM,
        redirectUri: import.meta.env.VITE_AUTH0_LOGIN_REDIRECT_URI,
        responseType: import.meta.env.VITE_AUTH0_LOGIN_RESPONSE_TYPE,
      },
      function (error, result) {
        if (error) {
          alert("Oops , Login Failed.");
          return console.log(error);
        }
        alert("Logged in successfully");
        // console.log(result);
      }
    );
  };

  return (
    <CenterForm>
      <FormWrapper>
        <LoginRegisterForm onSubmit={handleSubmit}>
          <h2 className="title">Login</h2>
          <InputGroup>
            <label htmlFor="">Email</label>
            <input type="email" name="email" placeholder="Enter Your Email" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
            />
          </InputGroup>
          <button className="submit">Login</button>
        </LoginRegisterForm>
        <LoginRegisterFooter>
          <div className="switchform">
            Don't have an account? <Link to="/signup">Singup</Link>
          </div>
          <div className="or">Or</div>
          <div className="socialLogin">
            <img
              src="https://img.icons8.com/color/512/google-logo.png"
              alt=""
              width={30}
              style={{ marginRight: "10px" }}
            />
            Continue with Google
          </div>
        </LoginRegisterFooter>
      </FormWrapper>
    </CenterForm>
  );
};

export default Login;
