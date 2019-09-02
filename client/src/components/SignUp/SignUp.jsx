import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../FormInput";
import CustomButton from "../CustomButton";

import { SignUpContainer, SignUpTitle, ButtonsContainer } from "./SignUpStyles";

import { signUpStart } from "../../redux/user/userActions";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I don't have an account</SignUpTitle>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          handleChange={handleChange}
          label="Name"
          required
        />

        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />

        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm password"
          required
        />
        <ButtonsContainer>
          <CustomButton type="submit">SIGN UP</CustomButton>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: newUser => dispatch(signUpStart(newUser))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
