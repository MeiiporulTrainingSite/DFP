import {
    FormControlLabel,
    Checkbox,
    Grid,
    Button,
    TextField,
    Typography
  } from "@mui/material";
  import { useFormik } from "formik";
  import * as Yup from "yup";
  import { useState } from "react";
  
  export default function Treatment() {
    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
  
    const formik = useFormik({
      initialValues: {
        Treatment: [
          {
            Medical: {
              Modifiedcast: "",
              HBOT: "",
              ModifiedShoes: "",
              Dressing: ""
            }
          },
          {
            Stemcell: {
              Stemcellt: ""
            }
          },
          {
            Surgical: {
              Revascularization: "",
              Intervention: "",
              Bypass: ""
            }
          }
        ]
      },
      // validationSchema: Yup.object({
      //   //  pus: Yup.string().required("Required")
      // }),
  
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
        // setSubmitting(true);
        // resetForm({});
      }
    });
    return (
      <form onSubmit={formik.handleSubmit} style={{ padding: "1.5rem" }}>
        <Typography variant="h4" sx={{ mb: "1rem" }}>
          Treatment offered
        </Typography>
        <Grid container spacing={2}>
          <Grid item lg={8} sx={{ display: "flex", flexDirection: "column" }}>
            <FormControlLabel
              control={<Checkbox name="Medical" value="Medical" />}
              label="Medical"
              onClick={(event) => {
                setChecked([event.target.checked]);
              }}
              onChange={formik.handleChange}
            />
            {/* {formik.touched.pus && formik.errors.pus ? (
              <p>*{formik.errors.pus}*</p>
            ) : null} */}
            <TextField
              sx={{ padding: "10px" }}
              value={formik.values.Treatment[0].Medical.Modifiedcast}
              label=" Modified Cast"
              type="text"
              name="Treatment[0].Medical.Modifiedcast"
              placeholder="Modified Cast"
              variant="outlined"
              disabled={!checked}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {/* {formik.touched.gramstain && formik.errors.FirstName ? (
              <p>*{formik.errors.FirstName}*</p>
            ) : null} */}
            <TextField
              sx={{ padding: "10px" }}
              value={formik.values.Treatment[0].Medical.HBOT}
              label=" Hyper Baric Oxygen therapy (HBOT)"
              type="text"
              name="Treatment[0].Medical.HBOT"
              placeholder="HBOT"
              variant="outlined"
              disabled={!checked}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {/* {formik.touched.FirstName && formik.errors.FirstName ? (
              <p>*{formik.errors.FirstName}*</p>
            ) : null} */}
            <TextField
              sx={{ padding: "10px" }}
              value={formik.values.Treatment[0].Medical.ModifiedShoes}
              label="Modified Shoes"
              type="text"
              name="Treatment[0].Medical.ModifiedShoes"
              placeholder="ModifiedShoes"
              variant="outlined"
              disabled={!checked}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />{" "}
            {/* {formik.touched.FirstName && formik.errors.FirstName ? (
              <p>*{formik.errors.FirstName}*</p>
            ) : null} */}
            <TextField
              sx={{ padding: "10px" }}
              value={formik.values.Treatment[0].Medical.Dressing}
              label="Dressing"
              type="text"
              name="Treatment[0].Medical.Dressing"
              placeholder="Dressing"
              variant="outlined"
              disabled={!checked}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />{" "}
            {/* {formik.touched.FirstName && formik.errors.FirstName ? (
              <p>*{formik.errors.FirstName}*</p>
            ) : null} */}
          </Grid>
          <Grid item lg={8} sx={{ display: "flex", flexDirection: "column" }}>
            <FormControlLabel
              control={<Checkbox name="stemcell" value="stemcell" />}
              label="Stemcell"
              onClick={(event) => {
                setChecked1([event.target.checked]);
              }}
              onChange={formik.handleChange}
            />
            <TextField
              sx={{ padding: "10px" }}
              value={formik.values.Treatment[1].Stemcell.Stemcellt}
              label="Stemcell"
              type="text"
              name="Treatment[1].Stemcell.Stemcellt"
              placeholder="Stemcell"
              variant="outlined"
              disabled={!checked1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />{" "}
            {/* {formik.touched.FirstName && formik.errors.FirstName ? (
              <p>*{formik.errors.FirstName}*</p>
            ) : null} */}
          </Grid>
          <Grid item lg={8} sx={{ display: "flex", flexDirection: "column" }}>
            <FormControlLabel
              control={<Checkbox name="Surgical" value="Surgical" />}
              label="Surgical"
              onClick={(event) => {
                setChecked2([event.target.checked]);
              }}
              onChange={formik.handleChange}
            />
            <TextField
              sx={{ padding: "10px" }}
              value={formik.values.Treatment[2].Surgical.Revascularization}
              label=" Revascularization"
              type="text"
              name="Treatment[2].Surgical.Revascularization"
              placeholder="Revascularization"
              variant="outlined"
              disabled={!checked2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />{" "}
            {/* {formik.touched.FirstName && formik.errors.FirstName ? (
              <p>*{formik.errors.FirstName}*</p>
            ) : null} */}
            <TextField
              sx={{ padding: "10px" }}
             value= {formik.values.Treatment[2].Surgical.Intervention}
              label="Endovascular Intervention"
              type="text"
              name="Treatment[2].Surgical.Intervention"
              placeholder="Intervention"
              variant="outlined"
              disabled={!checked2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />{" "}
            {/* {formik.touched.FirstName && formik.errors.FirstName ? (
              <p>*{formik.errors.FirstName}*</p>
            ) : null} */}
            <TextField
              sx={{ padding: "10px" }}
              value= {formik.values.Treatment[2].Bypass}
              label="Bypass"
              type="text"
              name="Treatment[2].Bypass"
              placeholder="Bypass"
              variant="outlined"
              disabled={!checked2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />{" "}
            {/* {formik.touched.FirstName && formik.errors.FirstName ? (
              <p>*{formik.errors.FirstName}*</p>
            ) : null} */}
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
  