import NavBar from "./Mainframes/Navbar";
import Section from "./container/section";
import { Paper, Grid } from "@mui/material";

export default function App() {
  return (
    <Paper
      sx={{
        // background: `linear-gradient(45deg, rgba(13, 200,171, 0.693671) 15.79%, rgba(125, 225, 209, 0.7) 25%, rgba(255, 255, 255, 0.344) 40.96%, rgba(13, 200,171, 0.693671) 100%, rgba(125, 225, 209, 0.3) 15%)`,
        width: "90vw",
        height: "94vh",
        margin: "20px auto",
        borderRadius: "20px",
        border: "2px solid black"
      }}
    >
      {/* <Socialmedia /> */}

      <Grid
        container
        className="grid"
        sx={{
          padding: {
            //     xs: "13vh 0rem 0 1rem",
            lg: "1rem 0rem 0 2rem"
            //     xl: "6rem 0rem 0 7rem"
          }
        }}
        // columnSpacing={{ md: -1, lg: -1, xl: 1 }}
      >
        <Grid item>
          <NavBar />
        </Grid>
        <Grid item sm={12} md={9}>
          <Section />
        </Grid>
      </Grid>
    </Paper>
  );
}
