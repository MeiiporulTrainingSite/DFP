import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Typography } from "@mui/material";

import Textbox from "../../component/Textbox";
import Grid from "@mui/material/Grid";

import "../../App.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TextField, Input } from "@mui/material";
import RadioCom from "./Radio";
import { SpaceBar } from "@mui/icons-material";
// import Microbiological from "./microprof";
export default function Antibiotic() {
  const formik = useFormik({
    initialValues: {
      prior: "",
      antibiotic: "",
      whichantibiotic: "",
      duration: "",
      microprofGramstainPus: "",
      microprof_Gramstain_Soft_tissue: "",
      microprof_Gramstain_Boneaspiration_biopsy: "",
      microprof_Growth_baseline_Pus: "",
      microprof_Growth_baseline_Soft_tissue: "",
      microprof_Growth_baseline_Boneaspiration_biopsy: "",
      microprof_Antibiotic_sensitivity_Pus: "",
      microprof_Antibiotic_sensitivity_Soft_tissue: "",
      microprof_Antibiotic_sensitivity_Boneaspiration_biopsy: "",
      Radio: "",
      Amputation: "",
      Amputationfreesurvival: "",
      Ambulatory: "",
      sequel:""
      // microprof: [
      //   { Gramstain: { Pus: "", Soft_tissue: "", Boneaspiration_biopsy: "" } },
      //   {
      //     Growth_baseline: {
      //       Pus: "",
      //       Soft_tissue: "",
      //       Boneaspiration_biopsy: "",
      //     },
      //   },
      //   {
      //     Antibiotic_sensitivity: {
      //       Pus: "",
      //       Soft_tissue: "",
      //       Boneaspiration_biopsy: "",
      //     },
      //   },
      // ],
    },
    validationSchema: Yup.object({
      prior: Yup.string().required("Required"),
      antibiotic: Yup.string().required("Required"),
      whichantibiotic: Yup.string().required("Required"),
      duration: Yup.string().required("Required"),
      Radio: Yup.string().required("Required"),
      Amputation: Yup.string().required("Required"),
      Amputationfreesurvival: Yup.string().required("Required"),
      Ambulatory: Yup.string().required("Required"),
      sequel:Yup.string().required("Required"),
      // microprofGramstainPus: Yup.string().required("Required"),
      // microprof_Gramstain_Soft_tissue:Yup.string().required("Required"),
      // microprof_Gramstain_Boneaspiration_biopsy: Yup.string().required("Required"),
      // microprof_Growth_baseline_Pus:Yup.string().required("Required"),
      // microprof_Growth_baseline_Soft_tissue:Yup.string().required("Required"),
      // microprof_Growth_baseline_Boneaspiration_biopsy:Yup.string().required("Required"),
      // microprof_Antibiotic_sensitivity_Pus:Yup.string().required("Required"),
      // microprof_Antibiotic_sensitivity_Soft_tissue:Yup.string().required("Required"),
      // microprof_Antibiotic_sensitivity_Boneaspiration_biopsy:Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const data = [
    {
      id: 1,
      label: "Gram Stain",
      Pus: "microprofGramstainPus",
      Soft_tissue: "microprof_Gramstain_Soft_tissue",
      Boneaspiration_biopsy: "microprof_Gramstain_Boneaspiration_biopsy",
      // touched: formik.touched.microprofGramstainPus,
      // error: formik.errors.microprofGramstainPus,
      // touched:formik.microprof_Gramstain_Soft_tissue,
      // error:formik.errors.microprof_Gramstain_Soft_tissue,
      // touched:formik.microprof_Gramstain_Boneaspiration_biopsy,
      // error:formik.errors.microprof_Gramstain_Boneaspiration_biopsy,
    },
    {
      id: 2,
      label: "Growth(Baseline)",
      Pus: "microprof_Growth_baseline_Pus",
      Soft_tissue: "microprof_Growth_baseline_Soft_tissue",
      Boneaspiration_biopsy: "microprof_Growth_baseline_Boneaspiration_biopsy",
      // touched:formik.touched.microprof_Growth_baseline_Pus,
      // error:formik.errors.microprof_Growth_baseline_Pus,
      // touched:formik.touched.microprof_Growth_baseline_Pus,
      // error:formik.errors.microprof_Growth_baseline_Pus,
      // touched:formik.touched.microprof_Growth_baseline_Pus,
      // error:formik.errors.microprof_Growth_baseline_Pus,
    },
    {
      id: 3,
      label: "Antibiotic Sensitivity",
      Pus: "microprof_Antibiotic_sensitivity_Pus",
      Soft_tissue: "microprof_Antibiotic_sensitivity_Soft_tissue",
      Boneaspiration_biopsy:
        "microprof_Antibiotic_sensitivity_Boneaspiration_biopsy",
      //   touched:formik.touched.microprof_Antibiotic_sensitivity_Pus,
      // error:formik.errors.microprof_Antibiotic_sensitivity_Pus,
      // touched:formik.touched.microprof_Antibiotic_sensitivity_Soft_tissue,
      // error:formik.errors.microprof_Antibiotic_sensitivity_Soft_tissue,
      // touched:formik.touched.microprof_Antibiotic_sensitivity_Boneaspiration_biopsy,
      // error:formik.microprof_Antibiotic_sensitivity_Boneaspiration_biopsy,
    },
  ];

  const radio = [
    {
      value: "Completely healed ",
      label: "Completely healed ",
      name: "Radio",
    },
    {
      value: "Partially healed",
      label: "Partially healed",
      name: "Radio",
    },
    {
      value: "Worsened",
      label: "Worsened",
      name: "Radio",
    },
  ];
  return (
    <form onSubmit={formik.handleSubmit} style={{ padding: "1.5rem" }}>
      <Typography variant="h4" sx={{ mb: "1rem" }}>
        Antibiotic Related Date
      </Typography>

      <Grid container spacing={1} columnSpacing={0.5}>
        <Grid item md={12} xl={12}>
          <Textbox
            label="PRIOR Antibiotics"
            type="text"
            name="prior"
            placeholder="Enter PRIOR Antibiotics value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.prior && formik.errors.prior ? (
            <p className="error">*{formik.errors.prior}*</p>
          ) : null}
        </Grid>
        <Grid item md={12} xl={12}>
          <Textbox
            label="Antibiotics started empirically"
            type="text"
            name="antibiotic"
            placeholder="Enter Antibiotics started empirically"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.antibiotic && formik.errors.antibiotic ? (
            <p className="error">*{formik.errors.antibiotic}*</p>
          ) : null}
        </Grid>
        <Typography
          sx={{
            color: "#0AD0B2",
            fontSize: "1.2rem",
            mb: "0.3rem",
            mt: "0.5rem",
          }}
        >
          Antibiotics after c/s report
        </Typography>
        <Grid item md={12} xl={12}>
          <Textbox
            label="Which antibiotics"
            type="text"
            name="whichantibiotic"
            placeholder="Enter Which antibiotics"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Whichantibiotics && formik.errors.Whichantibiotic ? (
            <p className="error">*{formik.errors.Whichantibiotic}*</p>
          ) : null}
        </Grid>
        <Grid item md={12} xl={12}>
          <Textbox
            label="For what duration"
            type="text"
            name="duration"
            placeholder="Enter For what duration"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.duration && formik.errors.duration ? (
            <p className="error">*{formik.errors.duration}*</p>
          ) : null}
        </Grid>
        <Grid item md={12} xl={12}>
          <Typography
            sx={{
              color: "#0AD0B2",
              fontSize: "1.2rem",
              mb: "0.3rem",
              mt: "0.5rem",
            }}
          >
            Microbiological Profile
          </Typography>
          <TableContainer>
            <Table sx={{ width: 1000 }} aria-label="simple table">
              <TableBody>
                {data.map((row, i) => (
                  <TableRow key={row.i}>
                    <TableCell
                      sx={{
                        width: "250px",
                        height: "20px",
                        fontSize: "1.1rem",
                      }}
                      padding="checkbox"
                      component="th"
                      scope="row"
                    >
                      {row.label}
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        value={formik.values.row}
                        label="Pus"
                        type="text"
                        name={row.Pus}
                        placeholder="Pus"
                        variant="outlined"
                        // disabled={!checked}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {/* {row.touched && row.error ? <p>*{row.error}*</p> : null} */}
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        // value={formik.values.{`row.${i}.present`}}
                        value={formik.values.row}
                        label="Soft_tissue"
                        type="text"
                        name={row.Soft_tissue}
                        placeholder="Soft_tissue"
                        variant="outlined"
                        // disabled={!checked}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        // value={formik.values.{`row.${i}.present`}}
                        value={formik.values.row}
                        label="Bone Aspiration/biopsy"
                        type="text"
                        name={row.Boneaspiration_biopsy}
                        placeholder="Bone Aspiration/biopsy"
                        variant="outlined"
                        // disabled={!checked}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item md={6} xl={12}>
          <Typography
            sx={{
              color: "#0AD0B2",
              fontSize: "1.2rem",
              mb: "0.3rem",
              mt: "0.5rem",
            }}
          >
            Outcome at 3 months
          </Typography>
          <Grid item md={12} xl={12}>
            <RadioCom
              radio={radio}
              OnChange={formik.handleChange}
              FormLabel="Status of Ulcer:"
            />
            {formik.touched.Radio && formik.errors.Radio ? (
              <p className="error">*{formik.errors.Radio}*</p>
            ) : null}
          </Grid>
        </Grid>
        <Grid item md={12} xl={12}>
          <Textbox
            label="Amputation"
            type="text"
            name="Amputation"
            placeholder="Enter Amputation Data"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Amputation && formik.errors.Amputation ? (
            <p className="error">*{formik.errors.Amputation}*</p>
          ) : null}
        </Grid>
        <Grid item md={12} xl={12}>
          <Typography
            sx={{
              color: "#0AD0B2",
              fontSize: "1.2rem",
              mb: "0.3rem",
              mt: "0.5rem",
            }}
          >
            Outcome(Long Term)
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={6} xl={6}>
            <Textbox
              label="Amputation free survival"
              type="text"
              name="Amputationfreesurvival"
              placeholder="Enter Amputation free survival Data"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
            />
            {formik.touched.Amputationfreesurvival &&
            formik.errors.Amputationfreesurvival ? (
              <p className="error">*{formik.errors.Amputationfreesurvival}*</p>
            ) : null}
          </Grid>
          <Grid item md={6} xl={6}>
            <Textbox
              label="Ambulatory (Plantigrade foot)"
              type="text"
              name="Ambulatory"
              placeholder="Enter Ambulatory (Plantigrade foot) Data"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
            />
            {formik.touched.Ambulatory && formik.errors.Ambulatory ? (
              <p className="error">*{formik.errors.Ambulatory}*</p>
            ) : null}
          </Grid>
        </Grid>
        <Grid item md={12} xl={12}>
          <Typography
            sx={{
              color: "#0AD0B2",
              fontSize: "1.2rem",
              mb: "0.3rem",
              mt: "0.5rem",
            }}
          >
           Sequel of Treatment:
          </Typography>
          <Grid item md={12} xl={12}>
          <Textbox
            label="Sequel of Treatment"
            type="text"
            name="sequel"
            placeholder="Enter Sequel of Treatment Data"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.sequel && formik.errors.sequel ? (
            <p className="error">*{formik.errors.sequel}*</p>
          ) : null}
        </Grid>
        </Grid>
        <Grid item md={12} lg={12} align="right">
          <Button
            type="submit"
            // onClick={onClick}
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
          {/* <Link to="/Probe to bone test"> */}
            <Button
              // onClick={onClick}
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
          {/* </Link> */}
        </Grid>
      </Grid>
    </form>
  );
}
