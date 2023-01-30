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

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Auth0 stuff
    auth.signup(
      {
        email,
        password,
        connection: import.meta.env.VITE_AUTH0_REALM,
      },
      function (error, result) {
        if (error) {
          alert("Oops , Registration Failed.");
          console.log(error);
        }
        alert("User Registration successfull");
        console.log(result);
      }
    );
  };

  return (
    <CenterForm>
      <FormWrapper>
        <LoginRegisterForm onSubmit={handleSubmit}>
          <h2 className="title">Register</h2>
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
          <button className="submit">Register</button>
        </LoginRegisterForm>
        <LoginRegisterFooter>
          <div className="switchform">
            Already have an account? <Link to="/login">Login</Link>
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

export default SignUp;
