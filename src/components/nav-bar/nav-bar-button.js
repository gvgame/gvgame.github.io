import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import React from "react";

const StyledButton = withStyles(() => ({
  root: {
    height: "100%",
    textTransform: "none",
    color: "inherit",
  },
}))(IconButton);

const NavBarButton = (props) => {
  const { Icon, onClick, label, labelTypographyProps = {} } = props;
  return (
    <StyledButton color="inherit" onClick={onClick}>
      <Icon />
      {label && (
        <Box m={1}>
          <Typography {...labelTypographyProps}>{label}</Typography>
        </Box>
      )}
    </StyledButton>
  );
};
export default NavBarButton;
