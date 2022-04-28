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
import Dosagetext from "./Dosagetext.js";

import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Checkbox,
  Button,
} from "@mui/material";

const columns = [
  {
    id: 1,
    label: "OAD",
  },
  {
    id: 2,
    label: "SU",
  },
  {
    id: 3,
    label: "Met",
  },
  {
    id: 4,
    label: "Glitazones",
  },
  {
    id: 5,
    label: "DPPIV",
  },
  {
    id: 6,
    label: " GLP-I Analogues",
  },
  {
    id: 7,
    label: " Type1",
  },
  {
    id: 8,
    label: " Type2",
  },
];
const Doslist = [
  {
    label: "OAD",
    placeholder: "OAD",
    text: "OADDosage",
  },
  {
    label: "SUDosage",
    placeholder: "SUD",
    text: "SUDosage",
  },
  {
    label: "MetDosage",
    placeholder: "Met",
    text: "MetDosage",
  },
  {
    label: "GlitazonesDosage",
    placeholder: "Glitazones",
    text: "GlitazonesDosage",
  },
  {
    label: "DPPIVDosage",
    placeholder: "DPPIV",
    text: "DPPIVDosage",
  },
  {
    label: "AnaloguesDosage",
    placeholder: "AnaloguesDosage",
    text: "AnaloguesDosage",
  },
  {
    label: "Type1",
    placeholder: "Type1",
    text: "Type1",
  },
  {
    label: "Type2",
    placeholder: "Type2",
    text: "Type2",
  },
];

export default function Antidiabetic() {
  const formik = useFormik({
    initialValues: {
      Diet: "",
      OADDosage: "",
      SUDosage: "",
      MetDosage: "",
      GlitazonesDosage: "",
      DPPIVDosage: "",
      AnaloguesDosage: "",
      Type1: "",
      Type2: "",
    },
    // validationSchema: Yup.object({
    //   currentlesion: Yup.object({
    //     toe: Yup.string().required
    //   })

    // }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
     style={{ padding: "1.5rem" }}
    >
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow component="h2">Anti-diabetic treatment</TableRow>
            <TableRow>
              <TextField
                sx={{ width: "60vw", m: "1rem", color: "primary.main" }}
                label="Diet only"
                name="Diet"
                placeholder="Diet"
                onChange={formik.handleChange}
                fullWidth
              />
              <TableRow>
                {columns.map((column, i) => (
                  <TableCell
                    align="center"
                    sx={{
                      width: "130px",
                      fontWeight: "bold",
                      color: "primary.main",
                    }}
                    key={column + i}
                    component="th"
                    scope="column"
                  >
                    {column.label}
                  </TableCell>
                ))}
                {/* </TableCell> */}
              </TableRow>
            </TableRow>
            <TableRow>
              <TableCell>
                {Doslist.map((dogelist, i) => (
                  <TableCell key={dogelist + i} component="th" scope="column">
                    <Dosagetext
                      sx={{ color: "primary.main" }}
                      label={dogelist.label}
                      placeholder={dogelist.placeholder}
                      name={dogelist.text}
                      onChange={formik.handleChange}
                    />
                  </TableCell>
                ))}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

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
    </form>
  );
}
