import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

export default function RadioCom(props) {
  return (
    <FormControl>
      <div>
        <FormLabel sx={{ color: "black" }} id="demo-radio-buttons-group-label">
          {props.FormLabel}
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          onChange={props.OnChange}
        >
          {props.radio.map((data, i) => (
            <FormControlLabel
              key={i + 1}
              name={data.name}
              value={data.value}
              control={<Radio />}
              label={data.label}
              sx={{ mr: "8rem", textAlign: "spaceAround" }}
            />
          ))}
        </RadioGroup>
      </div>
    </FormControl>
  );
}
