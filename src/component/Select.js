import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";

export default function SelectCom(props) {
  return (
    <FormControl sx={{ minWidth:'100%' }}>
      <InputLabel>{props.InputLabel}</InputLabel>
      <Select name={props.name} label={props.label} onChange={props.onChange}  >
        {props.select.map((data, i) => (
          <MenuItem value={data.value}>{data.item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
