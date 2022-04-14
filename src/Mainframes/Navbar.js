import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { menu } from "../data";
import { Link } from "react-scroll";
import * as React from "react";
import { Paper } from "@mui/material";
import { MenuList, MenuItem } from "@mui/material";
import logo from "../Images/logo.jpg";

export default function NavBar(props) {
  const drawer = (
    <List>
      {menu.map((list, i) => (
        <Box key={i}>
          <Link to={list.path}>
            <ListItem button>
              <ListItemIcon>{list.icon}</ListItemIcon>
              <ListItemText primary={list.title} />
            </ListItem>
          </Link>
          <Divider />
        </Box>
      ))}
    </List>
  );

  return (
    <>
      <Paper sx={{ display: "flex" }}>
        <Card
          sx={{
            display: { xs: "none", md: "block" },
            height: "86.3vh",
            width: "15vw",
            paddingTop: "15vh",
            backgroundColor: "#0AD0B2"
          }}
        >
          <CssBaseline />

          <img
            src={logo}
            alt="logo"
            style={{
              width: "120px",
              height: "100px",
              position: "relative",
              top: "35px",
              left: "23%",
              borderRadius: "13px"
            }}
          />
          <MenuList
            sx={{
              display: { xs: "none", md: "block" },
              position: "relative",
              marginTop: "5vh",
              marginLeft: "2.5vh"
            }}
          >
            <MenuItem>{drawer}</MenuItem>
          </MenuList>
        </Card>
      </Paper>
    </>
  );
}
