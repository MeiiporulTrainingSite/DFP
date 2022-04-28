import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Typography, TextField } from "@mui/material";

import Textbox from "../component/Textbox";
import Grid from "@mui/material/Grid";

import "../App.css";

import React from "react";

import { InputAdornment } from "@mui/material";

export default function InputAdorn(props) {
  return (
    <TextField
      // sx={{ width: '15ch' }}
      label={props.label}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      variant="outlined"
      onChange={props.onChange}
      onBlur={props.onBlur}
      // size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">{props.unit}</InputAdornment>
        ),
      }}
      fullWidth
    />
  );
}
