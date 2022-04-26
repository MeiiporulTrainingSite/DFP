import { FormControl,FormLabel ,FormControlLabel, FormGroup, Checkbox } from "@mui/material";
import { useState } from "react";
export default function CheckNone2(props) {  
  const [check1, setCheck1] = useState([false, false, false,false,false,false,false]);
  return (
    <FormControl>
    <FormLabel sx={{color:"#0AD0B2"}} id="demo-radio-buttons-group-label">{props.FormLabel}</FormLabel>
    <FormGroup row onChange={props.onChange} value={props.value}>
      <FormControlLabel
        disabled={check1[0]}
        onClick={(event) => {
          setCheck1([false, event.target.checked, check1[2],check1[3],check1[4],check1[5],check1[6]]);       
        }}
        control={<Checkbox value="ACEI" name={props.name} />}
        label="ACEI"      
      />
      <FormControlLabel
        disabled={check1[0]}
        onClick={(event) => {
          setCheck1([false, check1[1], event.target.checked,check1[3],check1[4],check1[5],check1[6]]);
        }}
        control={<Checkbox value="ARBs" name={props.name} />}
        value={props.value}
        label="ARBs"
      />      
       <FormControlLabel
        disabled={check1[0]}
        onClick={(event) => {
            setCheck1([false, check1[1], check1[2], event.target.checked,check1[4],check1[5],check1[6]]);
        }}
        control={<Checkbox value="Β Blockers" name={props.name} />}
        value={props.value}
        label="Β Blockers"
      />  
      <FormControlLabel
        disabled={check1[0]}
        onClick={(event) => {
          setCheck1([false, check1[1],check1[2],check1[3],event.target.checked,check1[5],check1[6]]);       
        }}
        control={<Checkbox value="CCB" name={props.name} />}
        label="CCB"      
      />
      <FormControlLabel
        disabled={check1[0]}
        onClick={(event) => {
          setCheck1([false,check1[1], check1[2],check1[3],check1[4],event.target.checked],check1[6]);       
        }}
        control={<Checkbox value="Thiazides" name={props.name} />}
        label="Thiazides"      
      />
      <FormControlLabel
        disabled={check1[0]}
        onClick={(event) => {
          setCheck1([false,check1[1], check1[2],check1[3],check1[4],check1[5],event.target.checked]);       
        }}
        control={<Checkbox value="α Blocker" name={props.name} />}
        label="α Blocker"      
      />
      <FormControlLabel
        control={
          <Checkbox
            disabled={check1[1] || check1[2]||check1[3]||check1[4]||check1[5]||check1[6]}
            onClick={(event) => {
              setCheck1([event.target.checked, false,false,false,false,false,false]);
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
