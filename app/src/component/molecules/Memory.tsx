import { Box } from "@material-ui/core";
import Image from "component/atoms/Image";
import Text from "component/atoms/Text";

interface Props {
  src: string;
  value: string;
}

export const Memory = (props:Props) => {
  return (
    <Box>
      <Image src={props.src} />
      <Text value={props.value} />
    </Box>
  );
};

export default Memory;
