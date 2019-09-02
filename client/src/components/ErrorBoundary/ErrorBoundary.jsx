import React from "react";
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText
} from "./ErrorBoundaryStyles";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrors: false
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrors: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrors) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/lKJiT77.png"></ErrorImageContainer>
          <ErrorImageText>Sorry, a dog ate this page :(</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
