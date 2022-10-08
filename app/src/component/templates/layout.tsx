import { ReactNode } from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";


interface Props {
  children: ReactNode;
}

export const Layout = (props: Props) => {
  return (
    <>
      <AppBar>
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
