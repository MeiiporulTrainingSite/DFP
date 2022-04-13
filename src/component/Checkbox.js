import { FormControlLabel, FormGroup, Checkbox } from "@mui/material";
export default function CheckBox(props) {
  return (
    <FormGroup row onChange={props.onChange}>
      {props.checkContent.map((check, i) => (
        <FormControlLabel
          key={i + 1}
          control={<Checkbox value={check.value} name={check.name} />}
          label={check.label}
        />
      ))}
    </FormGroup>
  );
}
