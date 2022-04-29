import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Typography,Table,TableRow,TableBody,TableContainer,TableCell } from "@mui/material";
import RadioCom from "../../component/Radio";
import Textbox from "../../component/Textbox";
import Grid from "@mui/material/Grid";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../App.css";


export default function VPT() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.storeData);
  let data1 = {};

  const formik = useFormik({
    initialValues: {},
    // validationSchema: Yup.object({

    // }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const score=[
{
    label:"AB Index(ABI)"
},
{
    label:"Follow Up"
},
{
    label:"Follow Up"
},
{
    label:"Follow Up"
},
{
    label:"Follow Up"
},
{
    label:"Follow Up"
},
{
    label:"Follow Up"
}]
  return (
    <form onSubmit={formik.handleSubmit} style={{ padding: "1.5rem" }}>
      <Typography variant="h4" sx={{ mb: "1rem" }}>
      VPT SCORE
      </Typography>
      <Grid container spacing={1.5}>
        <Grid item md={12} mb={"1rem"}>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <Typography sx={{ fontSize: "1.2rem", }}>
                
              </Typography>
            </Grid>
            <Grid item md={4} align="center">
              <Typography sx={{ fontSize: "1.2rem",  }}>
               Right
              </Typography>
            </Grid>
            <Grid item md={4} align="center">
              <Typography sx={{ fontSize: "1.2rem", }}>
               Left
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {score.map((vpt, i) => (
          <Grid item md={12} key={i + 1}>
            <Grid container spacing={2}>
              <Grid item md={3}>
                <Typography sx={{ fontSize: "1rem", color: "#0AD0B2" ,mt:"1rem"}}>{vpt.label}</Typography>
              </Grid>
              <Grid item md={4}>
                <Textbox/>
              </Grid>
              <Grid item md={4}>
              <Textbox/>
                </Grid>
                </Grid>
                </Grid>
                ))}
  
          
      
            <Grid item md={12} lg={12} align="right">
          <Button
            type="submit"
            sx={{
              backgroundColor: "#0AD0B2", color: "#fff", ":hover": {
                border: "1px solid #0AD0B2",
                color: "#0AD0B2"
              }, marginRight: "1rem"
            }}
          >
            Save
          </Button>
          <Button
            sx={{
              backgroundColor: "#0AD0B2", color: "#fff", ":hover": {
                border: "1px solid #0AD0B2",
                color: "#0AD0B2"
              }
            }}
          >
            next
          </Button>
        </Grid>

           
            </Grid>
    </form>
  );
}
