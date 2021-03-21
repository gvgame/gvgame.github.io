import React from "react";
import NextApp from "next/app";
import App from "../components/app";

class MyApp extends NextApp {
  constructor(props) {
    super(props);
  }

  render() {
    return <App title="Welcome to gvga.me" />;
  }
}

export default MyApp;
