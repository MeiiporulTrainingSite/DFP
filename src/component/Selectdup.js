import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { createTheme,ThemeProvider } from "@mui/material/styles";

// const theme = createTheme({
//     FormControl: { 
//     minWidth:'850px',
//    }
// });

export default function SelectCom(props) {
  return (
    // <ThemeProvider theme={theme}>
    <FormControl style={{minWidth: 750}} >
      <InputLabel>{props.InputLabel}</InputLabel>
      <Select name={props.name} label={props.label} onChange={props.onChange} >
        {props.select.map((data, i) => (
          <MenuItem value={data.value}>{data.item}</MenuItem>
        ))}
      </Select>
    </FormControl>
    // </ThemeProvider>
  );
}
