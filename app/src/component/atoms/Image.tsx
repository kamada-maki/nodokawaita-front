import { Box } from "@material-ui/core";

interface Props {
  src: string;
}

export const Image = (props: Props) => {
  return (
    <Box>
      <img style={{ width: "100%" }} src={props.src} />
    </Box>
  );
};

export default Image;
