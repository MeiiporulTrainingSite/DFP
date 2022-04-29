import { TextField } from "@mui/material";
export default function Textbox(props) {
  let row = props.textarea;
 
  return (
    <TextField
      label={props.label}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      variant="outlined"
      multiline
      rows={row}
      onChange={props.onChange}
      fullWidth
    />
  );
}
