import { FormControlLabel, FormGroup, Checkbox } from "@mui/material";
import { useState } from "react";
export default function CheckNone3(props) {  
  const [check1, setCheck1] = useState([false, false, false,false]);
  return (
    
    <FormGroup row onChange={props.onChange} value={props.value}>
      <FormControlLabel
        disabled={check1[0]}
        onClick={(event) => {
          setCheck1([false, event.target.checked, check1[2],check1[3]]);       
        }}
        control={<Checkbox value="Smoker" name={props.name} />}
        label="Smoker"      
      />
      <FormControlLabel
        disabled={check1[0]}
        onClick={(event) => {
          setCheck1([false, check1[1], event.target.checked,check1[3]]);
        }}
        control={<Checkbox value="Alcoholic" name={props.name} />}
        value={props.value}
        label="Alcoholic"
      />      
       <FormControlLabel
        disabled={check1[0]}
        onClick={(event) => {
            setCheck1([false, check1[1], check1[2], event.target.checked]);
        }}
        control={<Checkbox value="Tobacco Chewing" name={props.name} />}
        value={props.value}
        label="Tobacco Chewing"
      />  
      <FormControlLabel
        control={
          <Checkbox
            disabled={check1[1] || check1[2]||check1[3] }
            onClick={(event) => {
              setCheck1([event.target.checked, false,false,false]);
            }}
            value="None"
            name={props.name}
          />
        }
        label="None"
      />
    </FormGroup>
    
  );
}
