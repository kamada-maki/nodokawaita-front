import { ReactNode } from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

interface Props {
  children: ReactNode;
}

const useStyles = makeStyles(() => ({
  root: {
    background: "#525E75",
    height: "48px",
    width: "100%",
  },
}));

export const Layout = (props: Props) => {
  const classes = useStyles();

  return (
    <>
      <AppBar classes={{ root: classes.root }}>
        <Toolbar>
          <Typography variant="h1">nodokawaita</Typography>
          <Typography>クレームはこちら</Typography>
          <Button>記録する</Button>
        </Toolbar>
      </AppBar>
      {props.children}
    </>
  );
};

export default Layout;
