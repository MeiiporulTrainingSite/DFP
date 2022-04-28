import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { InputAdornment } from "@mui/material";

export default function Dosagetext(props) {
  return (
    <TextField
      // sx={{ width: '15ch' }}
      label={props.label}
      type="number"
      name={props.name}
      placeholder={props.placeholder}
      variant="outlined"
      onChange={props.onChange}
      onBlur={props.onBlur}
      size="small"
      InputProps={{
        endAdornment: <InputAdornment position="end">ml</InputAdornment>,
      }}
    />
  );
}
