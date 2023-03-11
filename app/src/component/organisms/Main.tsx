import { Box } from "@material-ui/core";
import Memory from "component/molecules/Memory";

interface Props {
  memories: {
    src: string;
    value: string;
  }[];
}
export const Main = (props: Props) => {
  return (
    <Box>
      {props.memories.map((memory) => {
        return (
          <Memory src={memory.src} value={memory.value} />
        )
      })}
    </Box>
  );
};

export default Main;
