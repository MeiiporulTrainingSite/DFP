import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Typography } from "@mui/material";
import RadioCom from "../../component/Radio";
import SelectCom from "../../component/Select";
import Textbox from "../../component/Textbox";
import Grid from "@mui/material/Grid";
import "../../App.css";
import CheckNone from "./CheckNone";

export default function Page3() {
  const formik = useFormik({
    initialValues: {
      canwalk: "",
      burn: "",
      prickling: "",
      numbness: "",
      DNStotal: "",
      FootatRisk: "",
      PVD: "",
      Claudication: [],
    },
    validationSchema: Yup.object({
      canwalk: Yup.string().required("Required"),
      burn: Yup.string().required("Required"),
      prickling: Yup.string().required("Required"),
      numbness: Yup.string().required("Required"),
      DNStotal: Yup.string().required("Required"),
      FootatRisk: Yup.string().required("Required"),
      PVD: Yup.string().required("Required"),
      Claudication: Yup.array()
        .required("Required")
        .min(1, "Please check atleast one"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const canwalk = [
    {
      value: "Yes",
      label: "Yes",
      name: "canwalk",
    },
    {
      value: "No",
      label: "No",
      name: "canwalk",
    },
  ];
  const burn = [
    {
      value: "Yes",
      label: "Yes",
      name: "burn",
    },
    {
      value: "No",
      label: "No",
      name: "burn",
    },
  ];
  const prickling = [
    {
      value: "Yes",
      label: "Yes",
      name: "prickling",
    },
    {
      value: "No",
      label: "No",
      name: "prickling",
    },
  ];
  const numbness = [
    {
      value: "Yes",
      label: "Yes",
      name: "numbness",
    },
    {
      value: "No",
      label: "No",
      name: "numbness",
    },
  ];
  const footrisk = [
    {
      value: "Neuropathy",
      item: "Neuropathy",
    },
    {
      value: "Nephropathy",
      item: "Nephropathy",
    },
    {
      value: "Sight threatening Retinopathy",
      item: "Sight threatening Retinopathy",
    },
    {
      value: "Callosity",
      item: "Callosity",
    },
    {
      value: "Previous H",
      item: "Previous H",
    },
    {
      value: "O Foot Ulcer",
      item: "O Foot Ulcer",
    },
    {
      value: "O Foot Ulcer",
      item: "O Foot Ulcer",
    },
    {
      value: "Amputation",
      item: "Amputation",
    },
    {
      value: "none",
      item: "none",
    },
  ];
  const pvd = [
    {
      value: "Yes",
      label: "Yes",
      name: "PVD",
    },
    {
      value: "No",
      label: "No",
      name: "PVD",
    },
  ];

  return (
    <form onSubmit={formik.handleSubmit} style={{ padding: "1.5rem" }}>
      <Typography variant="h4" sx={{ mb: "1rem" }}>
        DNS Score
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6} xl={6}>
          <RadioCom
            radio={canwalk}
            OnChange={formik.handleChange}
            FormLabel="Unsteadiness in walking"
          />
          {formik.touched.canwalk && formik.errors.canwalk ? (
            <p className="error">*{formik.errors.canwalk}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} xl={6}>
          <RadioCom
            radio={burn}
            OnChange={formik.handleChange}
            FormLabel="Burning/Aching pain and
Tenderness in legs"
          />
          {formik.touched.burn && formik.errors.burn ? (
            <p className="error">*{formik.errors.burn}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} xl={6}>
          <RadioCom
            radio={prickling}
            OnChange={formik.handleChange}
            FormLabel="Prickling Sensation on legs
or feet
"
          />
          {formik.touched.prickling && formik.errors.prickling ? (
            <p className="error">*{formik.errors.prickling}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} xl={6}>
          <RadioCom
            radio={numbness}
            OnChange={formik.handleChange}
            FormLabel="Numbness"
          />
          {formik.touched.numbness && formik.errors.numbness ? (
            <p className="error">*{formik.errors.numbness}*</p>
          ) : null}
        </Grid>
        <Grid item md={3} xl={3}>
          <Textbox
            label="Grade Total"
            type="text"
            name="DNStotal"
            placeholder="GrandTotal"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.DNStotal && formik.errors.DNStotal ? (
            <p className="error">*{formik.errors.DNStotal}*</p>
          ) : null}
        </Grid>
        <Grid item md={10} lg={10}>
          <SelectCom
            select={footrisk}
            name="FootatRisk"
            label="Foot at Risk"
            InputLabel="Foot at Risk"
            onChange={formik.handleChange}
          />
          {formik.touched.FootatRisk && formik.errors.FootatRisk ? (
            <p className="error">*{formik.errors.FootatRisk}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} xl={6}>
          <RadioCom
            radio={pvd}
            OnChange={formik.handleChange}
            FormLabel="Peripheral Vascular Disease"
          />
          {formik.touched.PVD && formik.errors.PVD ? (
            <p className="error">*{formik.errors.PVD}*</p>
          ) : null}
        </Grid>
        <Grid item md={12} xl={12}>
          <CheckNone
            name="Claudication"
            onChange={formik.handleChange}
            FormLabel="Claudification"
          />
          {formik.touched.Claudication && formik.errors.Claudication ? (
            <p className="error">*{formik.errors.Claudication}*</p>
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
