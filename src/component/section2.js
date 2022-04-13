import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import { Paper, Typography } from "@mui/material";

import { menu2 } from "../data/index";

export default function Section2() {
  const section2menu = (
    <List>
      {menu2.map((list, i) => (
        <Box key={i}>
          <ListItem button sx={{ padding: "2px" }}>
            <Typography
              sx={{
                fontSize: 13
              }}
            >
              {list.title}
            </Typography>
          </ListItem>
          {/* <Divider /> */}
        </Box>
      ))}
    </List>
  );
  return (
    <Paper square sx={{ width: "15vw", p: 1 }}>
      {section2menu}
    </Paper>
  );
}
