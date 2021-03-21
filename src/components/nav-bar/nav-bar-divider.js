import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const StyledDivider = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.black,
    width: 2,
  },
}))(Divider);

export default StyledDivider;
