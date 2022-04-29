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
import { TextField, Input, Typography, Grid, Box } from "@mui/material";

import BasicTextFields from './texterror';
import Estimatedprops from "./Estimatedprops";
import SelectCom from "./selectlesion";
import RadioCom from "./radiolesion";
import {
 
  Button
} from "@mui/material";

export default function Estimatedtimeoffootlesion() {
  const formik = useFormik({
    initialValues: {
      Years: "",
      Months: "",
      Days: "",
      footwear:"",
      preexisting_callus_leading_to_ulcer:"",
      currentlesion_toe_right: "",
      currentlesion_toe_left: "",
      currentlesion_webspace_right: "",
      currentlesion_webspace_left: "",
      currentlesion_forefoot_right: "",
      currentlesion_forefoot_left: "",
      currentlesion_midfoot_right: "",
      currentlesion_midfoot_left: "",
      currentlesion_heel_right: "",
      currentlesion_midfoot_left: "",
      currentlesion_heel_right: "",
      currentlesion_heel_left: "",
      currentlesion_ankle_right: "",
      currentlesion_ankle_left: "",
      wagnergrade: "",
      texasstage: "",
      texasgrade: ""
    },
    validationSchema: Yup.object({
      currentlesion_toe_right: Yup.string().required("required"),
      footwear:Yup.string().required("required"),
      preexisting_callus_leading_to_ulcer:Yup.string().required("required"),
      wagnergrade: Yup.string().required("required")
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  const footwear= [
    {
      value: "Injury",
      item: "Injury"
    },
    {
      value: "Burn",
      item: "Burn"
    },
    {
      value: "Other",
      item: "Other"
    },
  ];
  const callus = [
    {
      value: "Accident",
      label: "Accident",
      name: "preexisting_callus_leading_to_ulcer"
    },
    {
      value: "unknown",
      label: "Unknown",
      name: "preexisting_callus_leading_to_ulcer"
    }
  ];

  const rows = [
    {
      id: 1,
      label: "Toe",
      selectright: "currentlesion_toe_right",
      selectleft: "currentlesion_toe_left",
      touched: formik.touched.currentlesion_toe_right,
      error: formik.errors.currentlesion_toe_right
    },
    {
      id: 2,
      label: "Webspace",
      selectright: "currentlesion_webspace_right",
      selectleft: "currentlesion_webspace_left"
    },
    {
      id: 3,
      label: "Forefoot",
      selectright: "currentlesion_forefoot_right",
      selectleft: "currentlesion_forefoot_left"
    },
    {
      id: 4,
      label: "Midfoot",
      selectright: "currentlesion_midfoot_right",
      selectleft: "currentlesion_midfoot_left"
    },
    {
      id: 5,
      label: "Heel",
      selectright: "currentlesion_heel_right",
      selectleft: "currentlesion_heel_left"
    },
    {
      id: 6,
      label: "Ankle/Lowerleg",
      selectright: "currentlesion_ankle_right",
      selectleft: "currentlesion_ankle_left"
    }
  ];

  return (
    <form onSubmit={formik.handleSubmit} style={{ padding: "1.5rem" }}>

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
      
        <Grid item md={8} xl={8}>
        <Typography sx={{ fontSize:"18px",fontWeight:"bold",color: 'primary.main' }} >
                Footwear related
            </Typography>
        <SelectCom
            select={footwear}
            name="footwear"
            label="Footwear realted"
            InputLabel="Footwear realted"
            onChange={formik.handleChange}
          />
          {formik.touched.footwear && formik.errors.footwear ? (
            <p className="error">*{formik.errors.footwear}*</p>
          ) : null}
          </Grid>
<Grid item md={8} xl={8}>
<RadioCom
            radio={callus}
            OnChange={formik.handleChange}
            FormLabel="Preexisting callus leading to ulcer"
          />
          {formik.touched.preexisting_callus_leading_to_ulcer && formik.errors.preexisting_callus_leading_to_ulcer ? (
            <p className="error">*{formik.errors.preexisting_callus_leading_to_ulcer}*</p>
          ) : null}
</Grid>
          </Grid>

      <TableContainer>
        <Table sx={{ width: 520, marginTop: '1rem' }} aria-label="simple table">
          <TableBody>
            <TableRow  sx={{ width:"300",fontSize:"18px",fontWeight:"bold",color: 'primary.main' }}>
              Site of the Current Lesions
            </TableRow>
            {rows.map((row, i) => (
              <TableRow key={row.i}>
                <TableCell component="th" scope="row">
                  {row.label}
                </TableCell>
                <TableCell align="center">
                  <BasicTextFields
                    name={row.selectright}
                    onChange={formik.handleChange}
                    label="Right"
                    placeholder="Right"
                  />
                  {row.touched && row.error ? (<p>{row.error}</p>) : null}
                </TableCell>
                <TableCell align="center">
                  <BasicTextFields
                    name={row.selectleft}
                    onChange={formik.handleChange}
                    label="Left"
                    placeholder="Left"
                  />

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableRow>
          <TableCell component="th" scope="row">
            Severity of the lesion
          </TableCell>
          <TableCell align="left" >
            <TextField sx={{ width: '200px', m: '0 0 0 115px' }}
              label='WAGNER GRADE'
              type='number'
              name='wagnergrade'
              placeholder='WAGNER GRADE'
              variant="outlined"
              onChange={formik.handleChange} />
            {formik.touched.wagnergrade && formik.errors.wagnergrade ? (<p>{formik.errors.wagnergrade}</p>) : null}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell >
            TEXAS
          </TableCell>
          <TableCell >
            <TextField sx={{ width: '75px', m: '0px 50px 0px 115px' }}
              label='Stage'
              type='text'
              name='texasstage'
              placeholder='Stage'
              variant="outlined"
              onChange={formik.handleChange}
            />
            <TextField sx={{ width: '75px' }}
              label='Grade'
              type='text'
              name='texasgrade'
              placeholder='Grade'
              variant="outlined"
              onChange={formik.handleChange} />
          </TableCell>
        </TableRow>
        <Grid item md={12} lg={12} align="right">
          <Button
            type="submit"
            sx={{
              backgroundColor: "#0AD0B2", color: "#fff", ":hover": {
                border: "1px solid #0AD0B2",
                color: "#0AD0B2"
              }, marginRight: "1rem"
            }}
          >
            Save
          </Button>
          <Button
            sx={{
              backgroundColor: "#0AD0B2", color: "#fff", ":hover": {
                border: "1px solid #0AD0B2",
                color: "#0AD0B2"
              }
            }}
          >
            next
          </Button>
        </Grid>
      </TableContainer>
    </form>
  );
}
