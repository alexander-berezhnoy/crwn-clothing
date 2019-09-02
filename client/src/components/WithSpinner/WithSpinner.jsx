import React from "./node_modules/react";
import Spinner from "../Spinner/Spinner";

export const withSpinner = WrappedComponent => ({
  isLoading,
  ...otherComponents
}) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherComponents} />;
};
