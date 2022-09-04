import { TextField } from "@material-ui/core";

export const DateAndTimePickers = () => {
  return (
    <>
      <form noValidate>
        <TextField
          id="datetime-local"
          label="Next appointment"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    </>
  );
};

export default DateAndTimePickers;
