import { FormControl,FormLabel ,FormControlLabel, FormGroup, Checkbox } from "@mui/material";
import { useState } from "react";
export default function CheckNone1(props) {  
  const [check1, setCheck1] = useState([false, false, false,false]);
  return (
    <FormControl>
    <FormLabel sx={{color:"#0AD0B2"}} id="demo-radio-buttons-group-label">{props.FormLabel}</FormLabel>
    <FormGroup row onChange={props.onChange} value={props.value}>
      <FormControlLabel
        disabled={check1[0]}
        onClick={(event) => {
          setCheck1([false, event.target.checked, check1[2],check1[3]]);       
        }}
        control={<Checkbox value="Creatinine" name={props.name} />}
        label="Creatinine"      
      />
      <FormControlLabel
        disabled={check1[0]}
        onClick={(event) => {
          setCheck1([false, check1[1], event.target.checked,check1[3]]);
        }}
        control={<Checkbox value="Proteinuria" name={props.name} />}
        value={props.value}
        label="Proteinuria"
      />      
       <FormControlLabel
        disabled={check1[0]}
        onClick={(event) => {
            setCheck1([false, check1[1], check1[2], event.target.checked]);
        }}
        control={<Checkbox value="Micral" name={props.name} />}
        value={props.value}
        label="Micral"
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
    </FormControl>
  );
}
