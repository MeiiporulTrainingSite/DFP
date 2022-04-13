import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";

export default function SelectCom(props) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>{props.InputLabel}</InputLabel>
      <Select name={props.name} label={props.label} onChange={props.onChange}>
        {props.select.map((data, i) => (
          <MenuItem value={data.value}>{data.item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
