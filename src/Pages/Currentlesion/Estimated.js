import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Typography } from "@mui/material";

import Grid from "@mui/material/Grid";

import EstimatedTime from "./Estimatedprops";
export default function Estimated() {
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
    <form onSubmit={formik.handleSubmit} style={{ padding: "1.5rem" }}>
      <Typography variant="h4" sx={{ mb: "1rem" }}>
        Estimated Time of Foot Lesion
      </Typography>
      <Grid container spacing={1} columnSpacing={1.5}>
          <Grid item md={1} xl={1}>
      <EstimatedTime
            name="Years"
            onChange={formik.handleChange}
            label="Years"
            placeholder="Years"
          />
          </Grid>
          <Grid item md={1} xl={1}>
           <EstimatedTime
            name="Months"
            onChange={formik.handleChange}
            label="Months"
            placeholder="Months"
          />
          </Grid>
          <Grid item md={1} xl={1}>
           <EstimatedTime
            name="Days"
            onChange={formik.handleChange}
            label="Days"
            placeholder="Days"
          />
          </Grid>
           <Grid item md={12} lg={12} xl={12} align="right">
        <Button
          type="submit"
          sx={{
            backgroundColor: "#0AD0B2",
            color: "#fff",
            ":hover": {
              border: "1px solid #0AD0B2",
              color: "#0AD0B2"
            }
          }}
        >
          Continue
        </Button>
      </Grid>
      </Grid>
    </form>
  );
}
