import NavBar from "./Mainframes/Navbar";
import Section from "./container/section";
import { Paper, Grid,CssBaseline } from "@mui/material";
import "./App.css"

export default function App() {
  return (
    <>
    <CssBaseline/>
    <Paper
      sx={{ 
        
        //background: `linear-gradient(45deg, rgba(13, 200,171, 0.693671) 15.79%, rgba(125, 225, 209, 0.7) 25%, rgba(255, 255, 255, 0.344) 40.96%, rgba(13, 200,171, 0.693671) 100%, rgba(125, 225, 209, 0.3) 15%)`,
        // width: "111vw",
        // height: "100vh",
        
        // display:'flex',
        
        // margin: " auto",
        //borderRadius: "20px",
        // border: "2px solid black"
      }}
    >  
      <Grid
        container
        // justifyContent='center'
        // m="7vh 0 6vh 0"

        //  alignItems='center'
        // sx={{
        //   padding: {
        //     //     xs: "13vh 0rem 0 1rem",
        //     // lg: "0.3rem 0rem 0 2rem"
        //     //     xl: "6rem 0rem 0 7rem"
        //   },
        //   // transform: 'translate(-50%, -50%)'
        // }}
        // // columnSpacing={{ md: -1, lg: -1, xl: 1 }}
      >
        <Grid item md={2}>
          <NavBar />
        </Grid>
        <Grid item  md={10} >
          <Section />
        </Grid>
      </Grid>
    </Paper>
    </>
  );
}
