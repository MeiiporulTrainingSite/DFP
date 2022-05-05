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
         <FormLabel sx={{fontSize:"16px",color: 'primary.main'}}>{props.FormLabel}</FormLabel>
         <RadioGroup
           row
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
   