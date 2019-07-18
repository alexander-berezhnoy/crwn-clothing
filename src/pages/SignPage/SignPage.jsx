import React from "react";

import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

import { SignPageContainer } from "./SignPageStyles";

const SignPage = () => (
  <SignPageContainer>
    <SignIn />
    <SignUp />
  </SignPageContainer>
);

export default SignPage;
