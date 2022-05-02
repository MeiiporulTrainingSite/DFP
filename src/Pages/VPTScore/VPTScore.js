import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Typography,
  Table,
  TableRow,
  TableBody,
  TableContainer,
  TableCell,
} from "@mui/material";
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
    initialValues: {
      ABIRight: "",
      ABILeft: "",
      ABIFollowupRight: "",
      ABIFollowupLeft: "",
      TBIRight: "",
      TBILeft: "",
      TemperatureWarmRight: "",
      TemperatureWarmLeft: "",
      warmFollowupRight: "",
      warmFollowupLeft: "",
      TemperatureColdRight: "",
      TemperatureColdLeft: "",
     coldFollowupRight: "",
      coldFollowupLeft: "",
    },
    // validationSchema: Yup.object({

    // }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const score = [
    {
      label: "AB Index(ABI)",
      name: "ABIRight",
      name1:"ABILeft"
    },
    {
      label: "Follow Up",
      textarea: "3",
      name: "ABIFollowupRight",
      name1: "ABIFollowupLeft",
    },
    {
      label: "Toe Brachial Index(TBI)",
      name: "TBIRight",
      name1: "TBILeft",
    },
    {
      label: "Temperature (warm)",
      name: "TemperatureWarmRight",
      name1: "TemperatureWarmLeft",
    },
    {
      label: "Follow Up",
      textarea: "3",
      name: "warmFollowupRight",
      name1: "warmFollowupLeft",
    },
    {
      label: "Temperature (cold)",
      name: "TemperatureColdRight",
      name1: "TemperatureColdLeft",
    },
    {
      label: "Follow Up",
      textarea: "3",
      name: "coldFollowupRight",
      name1: "coldFollowupLeft",
    },
  ];
  return (
    <form onSubmit={formik.handleSubmit} style={{ padding: "1.5rem" }}>
      <Typography variant="h4" sx={{ mb: "1rem" }}>
        VPT SCORE
      </Typography>
      <Grid container spacing={1.5}>
        {score.map((vpt, i) => (
          <Grid item md={12} key={i + 1}>
            <Grid container spacing={2}>
              <Grid item md={3} sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ fontSize: "1rem", color: "#0AD0B2" }}>
                  {vpt.label}
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Textbox textarea={vpt.textarea}
                name={vpt.name}
                onChange={formik.handleChange}
                type="text"
                label="Right" />
              </Grid>
              <Grid item md={4}>
                <Textbox textarea={vpt.textarea} onChange={formik.handleChange}
                 name={vpt.name1}
                type="text"
                label="Left" />
              </Grid>
            </Grid>
          </Grid>
        ))}

        <Grid item md={12} lg={12} align="right">
          <Button
            type="submit"
            sx={{
              backgroundColor: "#0AD0B2",
              color: "#fff",
              ":hover": {
                border: "1px solid #0AD0B2",
                color: "#0AD0B2",
              },
              marginRight: "1rem",
            }}
          >
            Save
          </Button>
          <Button
            sx={{
              backgroundColor: "#0AD0B2",
              color: "#fff",
              ":hover": {
                border: "1px solid #0AD0B2",
                color: "#0AD0B2",
              },
            }}
          >
            next
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
