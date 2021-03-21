import React, { useState } from "react";
import ThemeProvider from "../theme/theme-provider";
import Head from "next/head";
import Drawer from "@material-ui/core/Drawer";
import NavBar from "./nav-bar/nav-bar";
import { useTheme } from "@material-ui/core/styles";

const Container = (props) => {
  const { palette } = useTheme();
  return (
    <div
      style={{
        color: palette.text.primary,
        background: palette.background.default,
        height: "100%",
      }}
    >
      {props.children}
    </div>
  );
};

const App = (props) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <React.Fragment>
      <Head>
        <title>gvgame</title>
      </Head>
      <ThemeProvider>
        <Container>
          <NavBar title={props.title} onMenuOpen={() => setNavOpen(true)} />
          <div
            style={{
              overflow: "auto",
              width: "100%",
              height: "calc(100% - 50px)",
            }}
          >
            <div>Website Under Construction</div>
          </div>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
