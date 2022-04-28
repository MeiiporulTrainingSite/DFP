import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
export default function Textbox1(props) {
  return (
    <TextField
      label={props.label}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      variant="outlined"
      onChange={props.onChange}
      fullWidth
      sx={{ width: "40ch" }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">{props.unit}</InputAdornment>
        ),
      }}
    />
  );
}
