import React from "react";
import { Link } from "react-router-dom";
import {
  CenterForm,
  FormWrapper,
  InputGroup,
  LoginRegisterFooter,
  LoginRegisterForm,
} from "../components/StyledComponents";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
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
