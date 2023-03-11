import { Box } from "@material-ui/core";

interface Props {
  src: string;
}

export const Image = (props: Props) => {
  return (
    <Box>
      <img src={props.src} />
    </Box>
  );
};

export default Image;
