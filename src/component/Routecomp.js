import { Box } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2/Page2";
import Page3 from "../Pages/Page3/Page3";
import Page4 from "../Pages/Page4/Page4";
import Observations from "../Pages/Page12/Observations";
import Pulsations from "../Pages/Page13/Pulsations";
import Dpage1 from "../Pages/dpage1";
import Dpage2 from "../Pages/dpage2";
import Dpage3 from "../Pages/dpage3/dpage3";
import Sinbad from "../Pages/Sinbad/Sinbad";
import Biochemical from "../Pages/Biochemical/Bio-chemical";
import Antidiabetic from "../Pages/Antidiabetic&Treatment/Antidiabetic";
import Treatment from "../Pages/Antidiabetic&Treatment/Treatment";
import Estimatedtimeoffootlesion from "../Pages/Currentlesion/currentlesion.js";
import Antibiotic from "../Pages/Antibiotic/Antibiotic";
// import Estimated from "../Pages/Currentlesion/Estimated";
import Nds from "../Pages/NDS/nds";
import Pedis from "../Pages/PEDIS/pedis";
import VPT from "../Pages/VPTScore/VPTScore";

export default function ListRouter() {
  return (
    <Box>
      <Switch>
        <Route path="/" exact>
          <Page1 />
        </Route>
        <Route path="/DiabeticComplications">
          <Page2 />
        </Route>
        <Route path="/DNS Score">
          <Page3 />
        </Route>
        <Route path="/RutherfordGrade">
          <Page4 />
        </Route>
        <Route path="/Footlesion">
          <Estimatedtimeoffootlesion />
        </Route>
        <Route path="/nds">
          <Nds />
        </Route>
        <Route path="/pedis">
          <Pedis />
        </Route>
        <Route path="/Sinbad">
          <Sinbad />
        </Route>
        <Route path="/VPTSCORE">
          <VPT />
        </Route>
        <Route path="/TCPO2">
          <Dpage1 />
        </Route>
        <Route path="/Probe to bone test">
          <Dpage2 />
        </Route>
        <Route path="/Radiography Findings">
          <Dpage3 />
        </Route>
        <Route path="/Observations">
          <Observations />
        </Route>
        <Route path="/Pulsations">
          <Pulsations />
        </Route>
        <Route path="/Bio-chemicalinvestigations">
          <Biochemical />
        </Route>
        <Route path="/Antidiabetic&treatment">
          <Antidiabetic />
          <Treatment />
        </Route>
        <Route path="/Antibiotic Related Date">
          <Antibiotic/>
        </Route>
      </Switch>
    </Box>
  );
}
