import * as React from "react";
import { ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TextField, Input, Typography, Grid } from "@mui/material";
import Textbox from "../../component/Textbox";
// import BasicTextFields from './texterror'

import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Checkbox,
  Button,
} from "@mui/material";

const rows = [
  {
    id: 1,
    label: "Gram Stain",
  },
  {
    id: 2,
    label: "Growth(Baseline)",
  },
  {
    id: 3,
    label: "Antibiotic Sensitivity",
  },
];

export default function Microbiological() {
  const formik = useFormik({
    initialValues: {
      microbiological: [
        { Gramstain: { Pus: "", Soft_tissue: "", Boneaspiration_biopsy: "" } },
        {
          Growth_baseline: {
            Pus: "",
            Soft_tissue: "",
            Boneaspiration_biopsy: "",
          },
        },
        {
          Antibiotic_sensitivity: {
            Pus: "",
            Soft_tissue: "",
            Boneaspiration_biopsy: "",
          },
        },
      ],
    },
    // validationSchema: Yup.object({
    //   currentlesion: Yup.object({
    //     toe: Yup.string().required
    //   })

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ padding: "1.5rem 1.5rem 1.5rem 3.5rem" }}
    >
      <TableContainer>
        <Table sx={{ width: 520 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="center">Pus</TableCell>
              <TableCell align="center">Soft-Tissue</TableCell>
              <TableCell align="center">Bone aspiration/Biopsy"</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* <TableRow component="h2" sx={{ width: 300 }}>
              
              {/* <TableCell align="center">Right</TableCell>
              <TableCell align="center">Left</TableCell> */}
            {/* </TableRow> */}
            {rows.map((row, i) => (
              <TableRow key={row.i}>
                <TableCell component="th" scope="row">
                  {row.label}
                </TableCell>
                <TableCell align="center">
                  <Textbox
                    name={row.Gramstain}
                    onChange={formik.handleChange}
                    //label="Gramstain"
                    // placeholder="Gramstain"
                  />
                  {/* <ErrorMessage name= {row.selectright} /> */}
                  {/* {formik.touched.[currentlesion.toe]}&& formik.errors.[currentlesion.toe]? (
        <p>*{formik.errors.[currentlesion.toe]}*</p>
      ) : null}  */}
                </TableCell>
                <TableCell align="center">
                  <Textbox
                    name={row.Growth_baseline}
                    onChange={formik.handleChange}
                    //label="Growth_baseline"
                    // placeholder="Growth_baseline"
                  />
                  {/* <ErrorMessage name= {row.Growth_baseline} /> */}
                </TableCell>

                <TableCell align="center">
                  <Textbox
                    name={row.Antibiotic_sensitivity}
                    onChange={formik.handleChange}
                    //label="Antibiotic_sensitivity"
                    // placeholder="Antibiotic_sensitivity"
                  />
                  {/* <ErrorMessage name= {row.Antibiotic_sensitivity} /> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* <TableRow>
          <TableCell component="th" scope="row">
            Severity of the lesion
          </TableCell>
          <TableCell align="left" >
            <TextField sx={{width: '180px',m:'0 0 0 140px'}}
              label='WAGNER GRADE'
              type='number'
              name='wagnergrade'
              placeholder='WAGNER GRADE'
              variant="outlined"
              onChange={formik.handleChange} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell >
            TEXAS
          </TableCell>
          <TableCell >
            <TextField sx={{ width: '75px', m: '0px 30px 0px 140px' }}
              label='Stage'
              type='text'
              name='texasstage'
              placeholder='Stage'
              variant="outlined"
              onChange={formik.handleChange}
            />
            <TextField sx={{ width: '75px'}}
              label='Grade'
              type='text'
              name='texasgrade'
              placeholder='Grade'
              variant="outlined"
              onChange={formik.handleChange} />
          </TableCell>
          
          </TableRow> */}

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
      </TableContainer>
    </form>
  );
}
