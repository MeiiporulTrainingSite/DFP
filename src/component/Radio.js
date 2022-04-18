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
         <FormLabel sx={{color:"#0AD0B2"}} id="demo-radio-buttons-group-label">{props.FormLabel}</FormLabel>
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
             />
           ))}
         </RadioGroup>
       </FormControl>
     );
   }
   