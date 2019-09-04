import React from "react";
import Spinner from "../Spinner";

const withSpinner = WrappedComponent => ({ isLoading, ...otherComponents }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherComponents} />;
};

export default withSpinner;
