import {
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
export default function CheckNone(props) {
  const [check1, setCheck1] = useState([false, false, false, false]);
  return (
    <FormControl>
      {/* <FormLabel sx={{ color: "#0AD0B2" }} id="demo-radio-buttons-group-label">
        {props.FormLabel}
      </FormLabel> */}
      <FormGroup
        row
        onChange={props.onChange}
        value={props.value}
        gap={3}
        sx={{ justifyContent: "space-between" }}
      >
        <FormControlLabel
          sx={{ mr: "5rem" }}
          disabled={check1[0]}
          onClick={(event) => {
            setCheck1([false, event.target.checked, check1[2], check1[3]]);
          }}
          control={<Checkbox value="Hypothyroidism" name={props.name} />}
          label="Hypothyroidism"
        />
        <FormControlLabel
          sx={{ mr: "5rem" }}
          disabled={check1[0]}
          onClick={(event) => {
            setCheck1([false, check1[1], event.target.checked, check1[3]]);
          }}
          control={<Checkbox value="COPD/Br Asthma /TB" name={props.name} />}
          value={props.value}
          label="COPD/Br Asthma /TB"
        />
        <FormControlLabel
          sx={{ mr: "5rem" }}
          disabled={check1[0]}
          onClick={(event) => {
            setCheck1([false, check1[1], check1[2], event.target.checked]);
          }}
          control={
            <Checkbox value="Ch. Liver Disease/ NAFLD" name={props.name} />
          }
          value={props.value}
          label="Ch. Liver Disease/ NAFLD"
        />
        <FormControlLabel
          sx={{ mr: "5rem" }}
          disabled={check1[0]}
          onClick={(event) => {
            setCheck1([false, check1[1], check1[2], event.target.checked]);
          }}
          control={<Checkbox value="Malignancy" name={props.name} />}
          value={props.value}
          label="Malignancy"
        />
        <FormControlLabel
          control={
            <Checkbox
              disabled={check1[1] || check1[2] || check1[3]}
              onClick={(event) => {
                setCheck1([event.target.checked, false, false, false]);
              }}
              value="None"
              name={props.name}
            />
          }
          label="None"
        />
      </FormGroup>
    </FormControl>
  );
}
