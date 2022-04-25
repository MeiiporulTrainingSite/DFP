import { FormControlLabel, FormGroup, Checkbox } from "@mui/material";
import { useState } from "react";
export default function CheckNone(props) {
  const [check1, setCheck1] = useState([false, false, false, false]);

  return (
    <FormGroup row onChange={props.onChange} value={props.value}>
      {/* {props.checkContent.map((check, i) => {
        console.log(i);
        return (
          <FormControlLabel
            disabled={check1[0]}
            onClick={(event) => {
              setCheck1([false,event.target.checked]);
            }}
            key={i + 1}
            control={<Checkbox value={check.value} name={check.name} />}
            label={check.label}
          />
        );
      })} */}
      <FormControlLabel
        disabled={check1[0]}
        onClick={(event) => {
          setCheck1([false, event.target.checked, check1[2], check1[3]]);
        }}
        control={<Checkbox value="right" name={props.name} />}
        label="right"
      />
      <FormControlLabel
        disabled={check1[0]}
        onClick={(event) => {
          setCheck1([false, check1[1], event.target.checked, check1[3]]);
        }}
        control={<Checkbox value="left" name={props.name} />}
        value={props.value}
        label="left"
      />
      <FormControlLabel
        disabled={check1[0]}
        onClick={(event) => {
          setCheck1([false, check1[1], check1[2], event.target.checked]);
        }}
        control={<Checkbox value="test" name={props.name} />}
        value={props.value}
        label="test"
      />
      {/* {console.log(check1[0], check1[1], check1[2], check1[3])} */}
      <FormControlLabel
        control={
          <Checkbox
            disabled={check1[1] || check1[2] || check1[3]}
            onClick={(event) => {
              setCheck1([event.target.checked, false, false, false]);
            }}
            value="None"
            name="LastName1"
          />
        }
        label="None"
      />
    </FormGroup>
  );
}
