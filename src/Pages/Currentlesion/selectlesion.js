import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";

export default function SelectCom(props) {
  return (
    <FormControl sx={{ width:'55%' }}>
      <InputLabel>{props.InputLabel}</InputLabel>
      <Select name={props.name} label={props.label} onChange={props.onChange} 
      // sx={{  height:"6.5vh"}} 
        >
        {props.select.map((data, i) => (
          <MenuItem value={data.value}>{data.item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
