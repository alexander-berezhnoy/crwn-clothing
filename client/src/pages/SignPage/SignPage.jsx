import React from "react";

import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";

import { SignPageContainer } from "./SignPageStyles";

const SignPage = () => (
  <SignPageContainer>
    <SignIn />
    <SignUp />
  </SignPageContainer>
);

export default SignPage;
