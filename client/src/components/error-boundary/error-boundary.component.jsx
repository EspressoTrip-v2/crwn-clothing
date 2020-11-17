import React from 'react';

/* STYLED COMPONENTS*/
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './error-boundary.styles.jsx';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/qIufhof.png" />
          <ErrorImageText>Closed due to technical issues...</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
