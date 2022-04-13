import { Box } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";

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
      </Switch>
    </Box>
  );
}
