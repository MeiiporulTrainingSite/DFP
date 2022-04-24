import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Typography } from "@mui/material";

import Textbox from "../component/Textbox";
import Grid from "@mui/material/Grid";

import "../App.css";
export default function Dpage1() {
  const formik = useFormik({
    initialValues: {
      Dexa_RT_Tscore: "",
      Dexa_RT_Zscore: "",

      Intervention_ltsite_1week: "",
      Intervention_rtsite_2week: "",
      Intervention_ltsite_2week: "",
      Intervention_rtsite_3week: "",
      Intervention_ltsite_3week: "",
      Intervention_rtsite_4week: "",
      Intervention_ltsite_4week: "",
      Intervention_rtsite_FU: "",
      Intervention_ltsite_FU: "",
    },
    validationSchema: Yup.object({
      Baseline_rtsite: Yup.string().required("Required"),
      Baseline_ltsite: Yup.string().required("Required"),
      Intervention_rtsite_1week: Yup.string().required("Required"),
      Intervention_ltsite_1week: Yup.string().required("Required"),
      Intervention_rtsite_2week: Yup.string().required("Required"),
      Intervention_ltsite_2week: Yup.string().required("Required"),
      Intervention_rtsite_3week: Yup.string().required("Required"),
      Intervention_ltsite_3week: Yup.string().required("Required"),
      Intervention_rtsite_4week: Yup.string().required("Required"),
      Intervention_ltsite_4week: Yup.string().required("Required"),
      Intervention_rtsite_FU: Yup.string().required("Required"),
      Intervention_ltsite_FU: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} style={{ padding: "1.5rem" }}>
      <Typography variant="h4" sx={{ mb: "1rem" }}>
        TCPO2
      </Typography>
      <Typography
        sx={{ color: "#0AD0B2", fontSize: "1rem", mb: "0.3rem", mt: "-1.5rem" }}
      >
        Baseline Name
      </Typography>
      <Grid container spacing={3} columnSpacing={1.5}>
        <Grid item md={6} xl={6}>
          <Textbox
            label="RT(site)"
            type="text"
            name="Baseline_rtsite"
            placeholder="Enter RT(site) value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Baseline_rtsite && formik.errors.Baseline_rtsite ? (
            <p className="error">*{formik.errors.Baseline_rtsite}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} xl={6}>
          <Textbox
            label="LT(site)"
            type="text"
            name="Baseline_ltsite"
            placeholder="Enter LT(site) value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Baseline_ltsite && formik.errors.Baseline_ltsite ? (
            <p className="error">*{formik.errors.Baseline_ltsite}*</p>
          ) : null}
        </Grid>
        <Grid item md={12} xl={12}>
          <Typography
            sx={{
              color: "#0AD0B2",
              fontSize: "1rem",
              mb: "-2rem",
              mt: "-0.5rem",
            }}
          >
            Intervention Name
          </Typography>
        </Grid>
        <Grid item md={6} xl={6}>
          <Textbox
            label="RT(site) 1week value"
            type="text"
            name="Intervention_rtsite_1week"
            placeholder="Enter RT(site) 1week value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Intervention_rtsite_1week &&
          formik.errors.Intervention_rtsite_1week ? (
            <p className="error">*{formik.errors.Intervention_rtsite_1week}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} xl={6}>
          <Textbox
            label="LT(site) 1 week value"
            type="text"
            name="Intervention_ltsite_1week"
            placeholder="Enter LT(site) 1week value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Intervention_ltsite_1week &&
          formik.errors.Intervention_ltsite_1week ? (
            <p className="error">*{formik.errors.Intervention_ltsite_1week}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} xl={6}>
          <Textbox
            label="RT(site) 2week value"
            type="text"
            name="Intervention_rtsite_2week"
            placeholder="Enter RT(site) 2week value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Intervention_rtsite_2week &&
          formik.errors.Intervention_rtsite_2week ? (
            <p className="error">*{formik.errors.Intervention_rtsite_2week}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} xl={6}>
          <Textbox
            label="LT(site) 2 week value"
            type="text"
            name="Intervention_ltsite_2week"
            placeholder="Enter LT(site) 2week value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Intervention_ltsite_2week &&
          formik.errors.Intervention_ltsite_2week ? (
            <p className="error">*{formik.errors.Intervention_ltsite_2week}*</p>
          ) : null}
        </Grid>

        <Grid item md={6} xl={6}>
          <Textbox
            label="RT(site) 3week value"
            type="text"
            name="Intervention_rtsite_3week"
            placeholder="Enter RT(site) 3week value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Intervention_rtsite_3week &&
          formik.errors.Intervention_rtsite_3week ? (
            <p className="error">*{formik.errors.Intervention_rtsite_3week}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} xl={6}>
          <Textbox
            label="LT(site) 3 week value"
            type="text"
            name="Intervention_ltsite_3week"
            placeholder="Enter LT(site) 3week value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Intervention_ltsite_3week &&
          formik.errors.Intervention_ltsite_3week ? (
            <p className="error">*{formik.errors.Intervention_ltsite_3week}*</p>
          ) : null}
        </Grid>

        <Grid item md={6} xl={6}>
          <Textbox
            label="RT(site) 4week value"
            type="text"
            name="Intervention_rtsite_4week"
            placeholder="Enter RT(site) 4week value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Intervention_rtsite_4week &&
          formik.errors.Intervention_rtsite_4week ? (
            <p className="error">*{formik.errors.Intervention_rtsite_4week}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} xl={6}>
          <Textbox
            label="LT(site) 4 week value"
            type="text"
            name="Intervention_ltsite_4week"
            placeholder="Enter LT(site) 4week value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Intervention_ltsite_4week &&
          formik.errors.Intervention_ltsite_4week ? (
            <p className="error">*{formik.errors.Intervention_ltsite_4week}*</p>
          ) : null}
        </Grid>

        <Grid item md={6} xl={6}>
          <Textbox
            label="RT(site) F/U value"
            type="text"
            name="Intervention_rtsite_FU"
            placeholder="Enter RT(site) F/U value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Intervention_rtsite_FU &&
          formik.errors.Intervention_rtsite_FU ? (
            <p className="error">*{formik.errors.Intervention_rtsite_FU}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} xl={6}>
          <Textbox
            label="LT(site) F/U value"
            type="text"
            name="Intervention_ltsite_FU"
            placeholder="Enter LT(site) F/U value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Intervention_ltsite_FU &&
          formik.errors.Intervention_ltsite_FU ? (
            <p className="error">*{formik.errors.Intervention_ltsite_FU}*</p>
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
