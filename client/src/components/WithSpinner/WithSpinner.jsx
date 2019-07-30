import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./WithSpinnerStyles";

export const withSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherComponents }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherComponents} />
    );
  };
  return Spinner;
};
