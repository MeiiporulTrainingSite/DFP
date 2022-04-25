import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Typography } from "@mui/material";

import Textbox from "../component/Textbox";
import Grid from "@mui/material/Grid";

import "../App.css";
export default function Dpage3() {
  const formik = useFormik({
    initialValues: {
      X_Ray_Foot: "",
      Doppler:"",
      CT_Angio_MRA:"",
      MRI_Foot:"",
      Bone_scan:""
      
    },
    validationSchema: Yup.object({
      X_Ray_Foot: Yup.string().required("Required"),
      Doppler:Yup.string().required("Required"),
      CT_Angio_MRA:Yup.string().required("Required"),
      MRI_Foot:Yup.string().required("Required"),
      Bone_scan:Yup.string().required("Required")
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} style={{ padding: "1.5rem" }}>
      <Typography variant="h4" sx={{ mb: "1rem" }}>
        Radiography Findings:
      </Typography>
     
      <Grid container spacing={3} columnSpacing={1.5}>
        <Grid item md={12} xl={12}>
          <Textbox
            label="X-Ray Foot"
            type="text"
            name="X_Ray_Foot"
            placeholder="Enter X-Ray Foot value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.X_Ray_Foot && formik.errors.X_Ray_Foot ? (
            <p className="error">*{formik.errors.X_Ray_Foot}*</p>
          ) : null}
        </Grid>
        <Grid item md={12} xl={12}>
          <Textbox
            label="Doppler"
            type="text"
            name="Doppler"
            placeholder="Enter Doppler value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Doppler && formik.errors.Doppler ? (
            <p className="error">*{formik.errors.Doppler}*</p>
          ) : null}
        </Grid>
        <Grid item md={12} xl={12}>
          <Textbox
            label="CT Angio/MRA"
            type="text"
            name="CT_Angio_MRA"
            placeholder="Enter CT Angio/MRA value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.CT_Angio_MRA && formik.errors.CT_Angio_MRA ? (
            <p className="error">*{formik.errors.CT_Angio_MRA}*</p>
          ) : null}
        </Grid>
        <Grid item md={12} xl={12}>
          <Textbox
            label="MRI Foot"
            type="text"
            name="MRI_Foot"
            placeholder="Enter MRI Foot value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.MRI_Foot && formik.errors.MRI_Foot ? (
            <p className="error">*{formik.errors.MRI_Foot}*</p>
          ) : null}
        </Grid>
        <Grid item md={12} xl={12}>
          <Textbox
            label="Bone scan"
            type="text"
            name="Bone_scan"
            placeholder="Enter Bone scan value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Bone_scan && formik.errors.Bone_scan? (
            <p className="error">*{formik.errors.Bone_scan}*</p>
          ) : null}
        </Grid>
        

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
            }}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
