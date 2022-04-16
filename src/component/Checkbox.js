import {FormControl,FormLabel, FormControlLabel, FormGroup, Checkbox } from "@mui/material";
export default function CheckBox(props) {
  return (
    <FormControl>
    <FormLabel id="demo-radio-buttons-group-label">{props.FormLabel}</FormLabel>
    <FormGroup row onChange={props.onChange}>
      {props.checkContent.map((check, i) => (
        <FormControlLabel
          key={i + 1}
          control={<Checkbox value={check.value} name={check.name} />}
          label={check.label}
        />
      ))}
    </FormGroup>
    </FormControl>
  );
}
