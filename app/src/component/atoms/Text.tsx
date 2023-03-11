import { TextField } from "@material-ui/core";

interface Props {
  value: string;
}

export const Text = (props: Props) => {
  return (
    <>
      <TextField
        inputProps={{
          readOnly: true,
        }}
        value={props.value}
      />
    </>
  );
};

export default Text;
