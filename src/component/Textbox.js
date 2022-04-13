import { TextField } from "@mui/material";
export default function Textbox(props) {
  return (    
    <TextField
        label={props.label}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        variant="outlined"
        onChange={props.onChange}
          fullWidth
      />
  );
}



  
    