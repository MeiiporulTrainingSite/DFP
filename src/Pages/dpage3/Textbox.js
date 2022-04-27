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
      sx={{ m: 1, width: "25ch" }}
      InputProps={{
        endAdornment: <InputAdornment position="end">kg</InputAdornment>,
      }}
    />
  );
}
