import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Paper, Box, Typography } from "@mui/material";
import Section1 from "../component/section1";
import Section2 from "../component/section2";

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
    <Paper square sx={{width:'71vw'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Section I" />

        <Tab label="Section II" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Section1 />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Section2 />
      </TabPanel>
    </Paper>
  );
}
