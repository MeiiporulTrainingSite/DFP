import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const min = 1;
const max = 5;

export default function BasicTextFields(props) {
  const [data, setData] = useState();
  const [isFormInvalid, setIsFormInvalid] = useState();

  const handlechange = (e) => {
    let data = parseInt(e.target.value, 10);
    setData(parseInt[data]);
    if (data > max || data < min) {
      setIsFormInvalid(true);
      e.target.value = "";
      data = "";
    } else {
      setIsFormInvalid(false);
    }
    props.onChange(e);
  };

  return (
    <div>
      <TextField
        variant="outlined"
        name={props.name}
        type="number"
        inputProps={{ min, max }}
        value={data}
        label={props.label}
        placeholder={props.placeholder}
        onChange={handlechange}
        error={isFormInvalid}
        helperText={isFormInvalid && "Incorrect"}
      />
    </div>
  );
}
