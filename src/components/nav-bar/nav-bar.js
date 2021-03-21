import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import NavBarDivider from "./nav-bar-divider";
import NavBarButton from "./nav-bar-button";
import Box from "@material-ui/core/Box";

const StyledAppBar = withStyles((theme) => ({
  root: {
    color: theme.palette.navbar.text,
    backgroundColor: theme.palette.navbar.background,
    height: "50px",
    width: "100%",
  },
}))(AppBar);

const NavBar = (props) => {
  const { title = "", onMenuOpen } = props;
  return (
    <StyledAppBar style={{ position: "static" }}>
      <Toolbar style={{ minHeight: 0 }} disableGutters>
        <NavBarButton Icon={MenuIcon} onClick={onMenuOpen} />
        <Box height={"100%"} mr={3}>
          <NavBarDivider orientation="vertical" />
        </Box>
        <Typography variant="h6" noWrap style={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <div
          style={{ flexGrow: 1, height: "100%" }}
          ref={props.navBarLeftRef}
        />
        <NavBarDivider orientation="vertical" />
      </Toolbar>
    </StyledAppBar>
  );
};
export default NavBar;
