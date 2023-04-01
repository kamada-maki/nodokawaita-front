import { Grid } from "@material-ui/core";
import MemoryCard from "component/molecules/MemoryCard";
import { Memory } from "component/templates";

interface Props {
  memories: Memory[];
}
export const Main = (props: Props) => {
  const memories = props.memories;

  return (
    <Grid container spacing={3}>
      {memories.map((memory, index) => {
        return <MemoryCard key={index} memory={memory} />;
      })}
    </Grid>
  );
};

export default Main;
