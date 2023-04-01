import { ReactNode } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

interface Props {
  children: NonNullable<ReactNode>;
}

const useStyles = makeStyles(() => ({
  header: {
    background: "#525E75",
    height: "48px",
    width: "100%",
    display: "flex",
    position: "relative",
  },
}));

export const Layout = (props: Props) => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.header}>
        <Toolbar>
          <Typography>nodokawaita</Typography>
          <Typography>クレームはこちら</Typography>
          <Button>記録する</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={2}>{props.children}</Box>
      </Container>
    </>
  );
};

export default Layout;
