import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Typography } from "@mui/material";

import Grid from "@mui/material/Grid";

import Estimatedprops from "./Estimatedprops";
export default function Estimatedtime() {
  const formik = useFormik({
    initialValues: {
      Years: "",
      Months: "",
      Days: "",
    },
    // validationSchema: Yup.object({
    //   Years: Yup.string().required("Required"),
    //   Months: Yup.string().required("Required"),
    //   Days: Yup.string().required("Required")
    // }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Grid container spacing={1} columnSpacing={1.5}>
      <Grid item md={12} xl={12}>
      <Typography variant="h4" >
        Estimated Time of Foot Lesion
      </Typography>
      </Grid>
          <Grid item md={1.5} xl={1.5}>
      <Estimatedprops
            name="Years"
            onChange={formik.handleChange}
            label="Years"
            placeholder="Years"
          />
          </Grid>
          <Grid item md={1.5} xl={1.5}>
           <Estimatedprops
            name="Months"
            onChange={formik.handleChange}
            label="Months"
            placeholder="Months"
          />
          </Grid>
          <Grid item md={1.5} xl={1.5}>
           <Estimatedprops
            name="Days"
            onChange={formik.handleChange}
            label="Days"
            placeholder="Days"
          />
          </Grid>
 
      </Grid>
    
  );
}
