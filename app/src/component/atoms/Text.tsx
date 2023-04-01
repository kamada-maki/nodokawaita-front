import { TextField } from "@material-ui/core";

interface Props {
  value: string;
}

export const Text = (props: Props) => {
  return (
    <>
      <TextField
        style={{ width: "100%" }}
        inputProps={{
          readOnly: true,
        }}
        value={props.value}
      />
    </>
  );
};

export default Text;
