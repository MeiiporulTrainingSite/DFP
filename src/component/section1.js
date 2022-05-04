import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import Box from "@mui/material/Box";
import { Grid, Paper, Typography, makeStyles } from "@mui/material";
import { Link } from "react-router-dom";

import { menu1 } from "../data/index";
import ListRouter from "./Routecomp";
import "../App.css";

export default function Section1() {
  const section1menu = (
    <List>
      {menu1.map((list, i) => (
        <Box key={i}>

          <ListItem
       
          button className="hoverLink" sx={{ padding: "2px" }}>
          
            {list.icon }
            <Typography
              sx={{
                fontSize: "1rem",
                mb: "2.5px",
                ml:"1px",
                // color:"primary"
              }}
            >

              <Link to={list.path} className="hoverLink">
               {list.title}{" "}
              </Link>
            </Typography>
          </ListItem>
          {/* <Divider /> */}
        </Box>
      ))}
    </List>
  );
  return (
    // <Box sx={{ display: "flex" }}>
    <Grid container>
      <Grid item lg={2.5}>
        <Paper
          square
          sx={{
            p: 1,
            background: "#F2F1F1",
            height: { lg: "92.2vh", xl: "93.5vh" },
          }}
        >
          {/* height: "79.9vh"  */}
          {section1menu}
        </Paper>
      </Grid>
      <Grid item lg={9.5}>
        <Box
          sx={{
            height: { lg: "92.2vh", xl: "93.5vh" },

            "&::-webkit-scrollbar": {
              width: 10,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "grey",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#0AD0B2",
              borderRadius: 2,
            },
            overflowX: "hidden",
          }}
        >
          <ListRouter />
        </Box>
      </Grid>
    </Grid>
    // </Box>
  );
}
