import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Grid, Typography, Button } from "@mui/material";
// import Paper from '@mui/material/Paper';
import { useFormik } from "formik";
import * as Yup from "yup";
import SelectCom from "./select";
import Textbox from "./textbox";

const perfusion = [
  {
    value: "1-Normal",
    item: "1-Normal"
  },
  {
    value: "2-Non-critical PAD",
    item: "2-Non-critical PAD"
  },
  {
    value: "3-Critical limb Ischemia",
    item: "3-Critical limb Ischemia"
  }
];
const depthtissueloss = [
  {
    value: "1-FullThickness",
    item: "1-FullThickness"
  },
  {
    value: "2-Deep",
    item: "2-Deep"
  },
  {
    value: "3-Bone and/or Joint",
    item: "3-Bone and/or Joint"
  }
];
const infection = [
  {
    value: "1-None",
    item: "1-None"
  },
  {
    value: "2-Mild",
    item: "2-Mild"
  },
  {
    value: "3-Moderate/Severe",
    item: "3-Moderate/Severe"
  },
  {
    value: "4-SIRS",
    item: "4-SIRS"
  }
];
const sensation = [
  {
    value: "1-Intact",
    item: "1-Intact"
  },
  {
    value: "2-LOPS",
    item: "2-LOPS"
  }
];

export default function Pedis() {
  const formik = useFormik({
    initialValues: {
      Perfusion: "",
      Size: "",
      DepthtissueLoss: "",
      Infection: "",
      Sensation: "",
      Total: ""
    },
    validationSchema: Yup.object({
      Perfusion: Yup.string().required("Required"),
      Size: Yup.number().required("Required"),
      DepthtissueLoss: Yup.string().required("Required"),
      Infection: Yup.string().required("Required"),
      Sensation: Yup.string().required("Required")
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit} style={{ padding: "1.5rem" }}>
      <Typography variant="h4" sx={{ mb: "1rem" }}>
        PEDIS
      </Typography>
      <TableContainer>
        <Table sx={{ width: 450 }}>
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{ width: "200px", fontSize: "18px", fontWeight: "bold" }}
              >
                Title
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "18px", fontWeight: "bold" }}
              >
                Grade
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="left" sx={{ fontSize: "16px" }}>
                Perfusion
              </TableCell>
              <TableCell align="center">
                <SelectCom
                  select={perfusion}
                  name="Perfusion"
                  label="Grade"
                  InputLabel="Grade"
                  onChange={formik.handleChange}
                />
                {formik.touched.Perfusion && formik.errors.Perfusion ? (
                  <p className="error">*{formik.errors.Perfusion}*</p>
                ) : null}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left" sx={{ fontSize: "16px" }}>
                Extent/Size (cm2)
              </TableCell>
              <TableCell align ='center'>
                <Textbox
                  label="Extent/Size"
                  type="number"
                  name="Size"
                  placeholder="Extent/Size"
                  variant="outlined"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  unit="cm2"
                  fullWidth
                />
                {formik.touched.Size && formik.errors.Size ? (
                  <p className="error">*{formik.errors.Size}*</p>
                ) : null}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left" sx={{ fontSize: "16px" }}>
                Depth tissue loss
              </TableCell>
              <TableCell align="center">
                <SelectCom
                  select={depthtissueloss}
                  name="DepthtissueLoss"
                  label="Grade"
                  InputLabel="Grade"
                  onChange={formik.handleChange}
                />
                {formik.touched.Depthtissueloss &&
                formik.errors.Depthtissueloss ? (
                  <p className="error">*{formik.errors.Depthtissueloss}*</p>
                ) : null}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left" sx={{ fontSize: "16px" }}>
                Infection
              </TableCell>
              <TableCell align="center">
                <SelectCom
                  select={infection}
                  name="Infection"
                  label="Grade"
                  InputLabel="Grade"
                  onChange={formik.handleChange}
                />
                {formik.touched.Infection && formik.errors.Infection ? (
                  <p className="error">*{formik.errors.Infection}*</p>
                ) : null}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left" sx={{ fontSize: "16px" }}>
                Sensation
              </TableCell>
              <TableCell align="center">
                <SelectCom
                  select={sensation}
                  name="Sensation"
                  label="Grade"
                  InputLabel="Grade"
                  onChange={formik.handleChange}
                />
                {formik.touched.Sensation && formik.errors.Sensation ? (
                  <p className="error">*{formik.errors.Sensation}*</p>
                ) : null}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left" sx={{ fontSize: "16px" }}>
                Total Score
              </TableCell>
              <TableCell>
                <Textbox
                  label="Total"
                  type="text"
                  name="Total"
                  placeholder="Total"
                  variant="outlined"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  fullWidth
                />
                {formik.touched.Total && formik.errors.Total ? (
                  <p className="error">*{formik.errors.Total}*</p>
                ) : null}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Grid item md={12} lg={12} align="right">
        <Button
          type="submit"
          sx={{
            backgroundColor: "#0AD0B2",
            color: "#fff",
            ":hover": {
              border: "1px solid #0AD0B2",
              color: "#0AD0B2"
            },
            marginRight: "1rem"
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
              color: "#0AD0B2"
            }
          }}
        >
          next
        </Button>
      </Grid>
    </form>
  );
}
