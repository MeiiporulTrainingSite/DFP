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
import { TextField, Input, Typography,Grid } from "@mui/material";
import Textbox from "../../component/Textbox"
import BasicTextFields from './texterror'

import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Checkbox,
  Button
} from "@mui/material";

const rows = [
  {
    id: 1,
    label: "Toe",
    selectright: "currentlesion[0].toe.right",
    selectleft: "currentlesion[0].toe.left"
  },
  {
    id: 2,
    label: "Webspace",
    selectright: "currentlesion[1].webspace.right",
    selectleft: "currentlesion[1].webspace.left"
  },
  {
    id: 3,
    label: "Forefoot",
    selectright: "currentlesion[2].forefoot.right",
    selectleft: "currentlesion[2].forefoot.left"
  },
  {
    id: 4,
    label: "Midfoot",
    selectright: "currentlesion[3].midfoot.right",
    selectleft: "currentlesion[3].midfoot.left"
  },
  {
    id: 5,
    label: "Heel",
    selectright: "currentlesion[4].heel.right",
    selectleft: "currentlesion[4].heel.left"
  },
  {
    id: 6,
    label: "Ankle/Lowerleg",
    selectright: "currentlesion[5].ankle.right",
    selectleft: "currentlesion[5].ankle.left"
  }
];

export default function Estimatedtimeoffootlesion() {
  const formik = useFormik({
    initialValues: {
      currentlesion: [
        { toe: { right: "", left: "" } },
        { webspace: { right: "", left: "" } },
        { forefoot: { right: "", left: "" } },
        { midfoot: { right: "", left: "" } },
        { heel: { right: "", left: "" } },
        { ankle: { right: "", left: "" } }
      ],
      wagnergrade: "",
      texasstage:"",
      texasgrade:""
    },
    // validationSchema: Yup.object({
    //   currentlesion: Yup.object({
    //     toe: Yup.string().required
    //   })
    //   //   Yup.object({
    //   //     toe:Yup.object({
    //   //       right: Yup.string().matches([0-9], "Must be only digits"),
    //   //       left: Yup.string().matches([0-9], "Must be only digits")
    //   //     })
    //   //  })
    // }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ padding: "1.5rem 1.5rem 1.5rem 3.5rem" }}>
      <TableContainer>
        <Table sx={{ width: 520 }} aria-label="simple table">

          <TableBody>
            <TableRow component="h2" sx={{ width: 300 }}>
              Site of the Current Lesions
              {/* <TableCell align="center">Right</TableCell>
              <TableCell align="center">Left</TableCell> */}
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
                  {/* <ErrorMessage name= {row.selectright} /> */}
                  {/* {formik.touched.[currentlesion.toe]}&& formik.errors.[currentlesion.toe]? (
        <p>*{formik.errors.[currentlesion.toe]}*</p>
      ) : null}  */}
                </TableCell>
                <TableCell align="center">
                  <BasicTextFields
                    name={row.selectleft}
                    onChange={formik.handleChange}
                    label="Left"
                    placeholder="Left"
                  />
                  {/* <ErrorMessage name= {row.selectright} /> */}
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
          
          </TableRow>
          
          <Grid item md={12} lg={12} align="right">
      <Button
            type="submit"
            sx={{ backgroundColor: "#0AD0B2", color: "#fff", ":hover": {
              border:"1px solid #0AD0B2",
              color: "#0AD0B2"
            },marginRight:"1rem" }}
          >
           
           Save
            
          </Button>
          <Button
           
           
            sx={{ backgroundColor: "#0AD0B2", color: "#fff", ":hover": {
              border:"1px solid #0AD0B2",
              color: "#0AD0B2"
            } }}
          >
           
           next
            
          </Button>
          </Grid>
        
      </TableContainer>
     
    </form>
  );
}
