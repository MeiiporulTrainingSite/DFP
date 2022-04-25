import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Paper, Box, Typography,ScopedCssBaseline, } from "@mui/material";
import { createTheme,ThemeProvider } from "@mui/material/styles";
import GlobalStyles from '@mui/material/GlobalStyles';
import darkScrollbar from '@mui/material/darkScrollbar';
import "../App.css";

import Section1 from "../component/section1";
import Section2 from "../component/section2";


const theme = createTheme({
  palette: {
    primary: { 
    main: '#0AD0B2',
   }
 },
//  breakpoints: {
//   values: {
//     xs: 0,
//     sm: 640,
//     md: 1024,
//     lg: 1300,
//     xl:1500
//   },
// },
});
export default function Section() {
  const [value, setValue] = React.useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme}>
     
    <Paper square >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="disabled tabs example"
        sx={{ background: "#F2F1F1" }}
        
        //TabIndicatorProps={{style: {background:'#0AD0B2',height:"0.2rem",borderRadius:"1rem"}}}
       
      >
        <Tab
          sx={{ fontSize: "1.2rem" }}
          label="Section I"
         
        />
        <Tab
          sx={{ fontSize: "1.2rem" }}
          label="Section II"
 
        />
      </Tabs>
      <TabPanel value={value} index={0}  >
      <ScopedCssBaseline/>
      
        <Section1 />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Section2 />
      </TabPanel>
    </Paper>
    </ThemeProvider>
  );
}
