import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import { Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { menu1 } from "../data/index";
import ListRouter from "./Routecomp";

export default function Section1() {
  const section1menu = (
    <List>
      {menu1.map((list, i) => (
        <Box key={i}>
          <ListItem button sx={{ padding: "2px" }}>
            <Typography
              sx={{
                fontSize: 13
              }}
            >
              <Link to={list.path}>{list.title} </Link>
            </Typography>
          </ListItem>
          {/* <Divider /> */}
        </Box>
      ))}
    </List>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <Paper square sx={{ width: "25vw", p: 1 }}>
        {section1menu}
      </Paper>
      <ListRouter />
    </Box>
  );
}
