import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Typography } from "@mui/material";

import Textbox from "../../component/Textbox";
import Grid from "@mui/material/Grid";

import "../../App.css";
import CheckNone from "./CheckNone";
import InputAdornment from "@mui/material/InputAdornment";
import Textbox1 from "./Textbox";
export default function Dpage3() {
  const formik = useFormik({
    initialValues: {
      X_Ray_Foot: "",
      Doppler: "",
      CT_Angio_MRA: "",
      MRI_Foot: "",
      Bone_scan: "",
      Other_Comorbidities: [],
      Weight: "",
      Height: "",
      BMI: "",
    },
    validationSchema: Yup.object({
      X_Ray_Foot: Yup.string().required("Required"),
      Doppler: Yup.string().required("Required"),
      CT_Angio_MRA: Yup.string().required("Required"),
      MRI_Foot: Yup.string().required("Required"),
      Bone_scan: Yup.string().required("Required"),
      Other_Comorbidities: Yup.array()
        .required("Required")
        .min(1, "Please check atleast one"),
      Weight: Yup.string().required("Required"),
      Height: Yup.string().required("Required"),
      BMI: Yup.string().required("Required"),
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

      <Grid container spacing={1} columnSpacing={0.5}>
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
          {formik.touched.Bone_scan && formik.errors.Bone_scan ? (
            <p className="error">*{formik.errors.Bone_scan}*</p>
          ) : null}
        </Grid>
        <Typography variant="h4" sx={{ mb: "1rem", mt: "1rem" }}>
          Other Co-morbidities:
        </Typography>
        <Grid container spacing={1} columnSpacing={1}>
          <Grid item md={12} xl={12}>
            <CheckNone
              name="Other_Comorbidities"
              onChange={formik.handleChange}
              FormLabel="Other_Comorbidities"
              sx={{ justifyContent: "space-around" }}
            />
            {formik.touched.Other_Comorbidities &&
            formik.errors.Other_Comorbidities ? (
              <p className="error">*{formik.errors.Other_Comorbidities}*</p>
            ) : null}
          </Grid>
        </Grid>

        <Typography variant="h4" sx={{ mb: "1rem", mt: "1rem" }}>
          Anthropometry:
        </Typography>
        <Grid container spacing={1} columnSpacing={2}>
          <Grid item md={4} xl={4}>
            <Textbox1
              label="Weight"
              type="text"
              name="Weight"
              placeholder="Enter Weight"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
              unit="kg"
              // InputProps={endAdornment}
            />
            {formik.touched.Weight && formik.errors.Weight ? (
              <p className="error">*{formik.errors.Weight}*</p>
            ) : null}
          </Grid>
          <Grid item md={4} xl={4}>
            <Textbox1
              label="Height"
              type="text"
              name="Height"
              placeholder="Enter Height"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
              unit="cm"
              // InputProps={endAdornment}
            />
            {formik.touched.Height && formik.errors.Height ? (
              <p className="error">*{formik.errors.Height}*</p>
            ) : null}
          </Grid>
          <Grid item md={4} xl={4}>
            <Textbox1
              label="BMI"
              type="text"
              name="BMI"
              placeholder="Enter BMI value"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
              unit="kg/cm2"
              // InputProps={endAdornment}
            />
            {formik.touched.BMI && formik.errors.BMI ? (
              <p className="error">*{formik.errors.BMI}*</p>
            ) : null}
          </Grid>
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
