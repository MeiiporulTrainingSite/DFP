import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Typography, TextField } from "@mui/material";
import InputAdorn from "./inputadornment";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import "../App.css";

import React from "react";
import { makeStyles } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { BiotechOutlined } from "@mui/icons-material";
import { Box } from "@mui/system";

const Biochemicalinput = [
  {
    label: "FBG",
    type: "text",
    name: "fbg",
    placeholder: "FBG",
    unit: "mg/dL",
  },
  {
    label: "PPBG",
    type: "text",
    name: "ppbg",
    placeholder: "PPBG",
    unit: "mg/dL",
  },
  {
    label: "HbA1C",
    type: "text",
    name: "HbA1C",
    placeholder: "HbA1C",
    unit: "%",
  },
];
const Biochemicalinput1 = [
  {
    label: "Urea",
    type: "text",
    name: "urea",
    placeholder: "Urea",
    unit: "unit",
  },
  {
    label: "Creatinine",
    type: "text",
    name: "creatinine",
    placeholder: "Creatinine",
    unit: "unit",
  },
  {
    label: "Hb",
    type: "text",
    name: "Hb",
    placeholder: "Hb",
    unit: "unit",
  },
  {
    label: "TLC",
    type: "text",
    name: "TLC",
    placeholder: "TLC",
    unit: "unit",
  },
];

export default function Jpage1() {
  const formik = useFormik({
    initialValues: {
      fbg: "",
      ppbg: "",
      HbA1C: "",
      urea: "",
      creatinine: "",
      Hb: "",
      TLC: "",
      protein: "",
      Cr: "",
      Tv: "",
      LDL: "",
      HDL: "",
      TG: "",
      SGOT: "",
      SPOT: "",
      Albumin: "",
      ESRFU: "",
      CRPFU: "",
      ProcalcitoninFU: "",
      VitD3: "",
    },
    validationSchema: Yup.object({
      fbg: Yup.string().required("Required"),
      ppbg: Yup.string().required("Required"),
      HbA1C: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} style={{ padding: "1.5rem" }}>
      <Typography variant="h4" sx={{ mb: "1rem" }}>
        Biochemical Investigations
      </Typography>
      <Grid container spacing={1}>
        {Biochemicalinput.map((bio, i) => (
          <Grid item key={i + 1} md={4} xl={4}>
            <InputAdorn
              label={bio.label}
              type={bio.type}
              name={bio.name}
              placeholder={bio.placeholder}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              unit={bio.unit}
            />
          </Grid>
        ))}
        {/* <Grid container item  md={12} xl={12} > */}
        {Biochemicalinput1.map((bio1, i) => (
          <Grid item key={i + 1} md={6} xl={6}>
            <InputAdorn
              label={bio1.label}
              type={bio1.type}
              name={bio1.name}
              placeholder={bio1.placeholder}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              unit={bio1.unit}
            />
          </Grid>
        ))}
        {/* </Grid> */}
        <Grid item md={2.1} xl={3}>
          <Typography sx={{ mt: 2, color: "primary.main", fontSize: "20px" }}>
            24hr urine:
          </Typography>
        </Grid>
        <Grid item md={3.3} xl={3}>
          <InputAdorn
            label="Protein"
            type="text"
            name="protein"
            placeholder="Protein"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            unit="unit"
          />
        </Grid>
        <Grid item md={3.3} xl={3}>
          <InputAdorn
            label="Cr"
            type="text"
            name="Cr"
            placeholder="Cr"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            unit="unit"
          />
        </Grid>
        <Grid item md={3.3} xl={3}>
          <InputAdorn
            label="Tv"
            type="text"
            name="Tv"
            placeholder="Tv"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            unit="unit"
          />
        </Grid>
        {/* <Grid container> */}
        <Grid item md={2.1} xl={3}>
          <Typography sx={{ mt: 2, color: "primary.main", fontSize: "20px" }}>
            Cholesterol
          </Typography>
        </Grid>
        <Grid item md={3.3} xl={3}>
          <InputAdorn
            label="LDL"
            type="text"
            name="LDL"
            placeholder="LDL"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            unit="unit"
          />
        </Grid>
        <Grid item md={3.3} xl={3}>
          <InputAdorn
            label="HDL"
            type="text"
            name="HDL"
            placeholder="HDL"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            unit="unit"
          />
        </Grid>
        <Grid item md={3.3} xl={3}>
          <InputAdorn
            label="TG"
            type="text"
            name="TG"
            placeholder="TG"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            unit="unit"
          />
        </Grid>
        {/* </Grid> */}
        <Grid item md={2.1} xl={3}>
          <Typography sx={{ mt: 2, color: "primary.main", fontSize: "20px" }}>
            SGOT/SPOT
          </Typography>
        </Grid>
        <Grid item md={3.3} xl={3}>
          <InputAdorn
            label="SGOT"
            type="text"
            name="SGOT"
            placeholder="SGOT"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            unit="unit"
          />
        </Grid>
        <Grid item md={3.3} xl={3}>
          <InputAdorn
            label="SPOT"
            type="text"
            name="SPOT"
            placeholder="SPOT"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            unit="unit"
          />
        </Grid>
        <Grid item md={3.3} xl={3}>
          <InputAdorn
            label="Albumin"
            type="text"
            name="Albumin"
            placeholder="Albumin"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            unit="unit"
          />
        </Grid>

        <Grid item md={3} xl={3}>
          <InputAdorn
            label="ESR F/U"
            type="text"
            name="ESRFU"
            placeholder="ESR F/U"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            unit="unit"
          />
        </Grid>
        <Grid item md={3} xl={3}>
          <InputAdorn
            label="CRP F/U"
            type="text"
            name="CRPFU"
            placeholder="CRP F/U"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            unit="unit"
          />
        </Grid>
        <Grid item md={3} xl={3}>
          <InputAdorn
            label="Procalcitonin
              F/U"
            type="text"
            name="ProcalcitoninFU"
            placeholder="Procalcitonin
              F/U"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            unit="unit"
          />
        </Grid>
        <Grid item md={3} xl={3}>
          <InputAdorn
            label="25(OH)Vit D3(ng/ml)"
            type="text"
            name="VitD3"
            placeholder="VitD3"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            unit="unit"
          />
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
