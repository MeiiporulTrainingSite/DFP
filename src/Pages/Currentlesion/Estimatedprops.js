import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const min = 1;
const max = 100;

export default function Estimatedprops(props) {
  const [value, setValue] = useState();

  return (
    // <Grid>
    //   {/* <Menu> */}
    //   <Grid item md={6} xl={6}>
        <TextField
        // sx={{width:'80px',m:'0 1rem'}}
          name={props.name}
          type="number"
          inputProps={{ min, max }}
          value={value}
          label={props.label}
          placeholder={props.placeholder}
          onChange={(e) => {
            let value = parseInt(e.target.value, 10);
            setValue(value);
            if (value > max) value = max;
            if (value < min) value = min;

            props.onChange(e);
          }}
          variant="outlined"
        />
    //   </Grid>
    // </Grid>
  );
}


