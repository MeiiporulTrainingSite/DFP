import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Typography } from "@mui/material";
import RadioCom from "../component/Radio";
import SelectCom from "../component/Select";
import Textbox from "../component/Textbox";
import Grid from "@mui/material/Grid";
import CheckBox from "../component/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import "../App.css";

export default function Page2() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.storeData);
  let data1={}
  
  const formik = useFormik({
    initialValues: {
      Retinopathy: [],
      Lasercoagulation: [],
      Nephropathy: [],
      eGFR: "",
      Motor: [],
      Autonomic: [],
      Sensory: "",
    },
    validationSchema: Yup.object({
      Retinopathy: Yup.array().required("required").min(1, "atleast one"),
      Lasercoagulation: Yup.array().required("required").min(1, "atleast one"),
      Nephropathy: Yup.array().required("required").min(1, "atleast one"),
      eGFR: Yup.string().required("Required"),
      Motor: Yup.array().required("required").min(1, "atleast one"),
      Autonomic: Yup.array().required("required").min(1, "atleast one"),
      Sensory: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      dispatch({type:"storeData",data:values})
    //  alert(JSON.stringify(selector, null, 2));
    },
  });

  console.log(selector)
  const retinopathy = [
    {
      value: "Left",
      name: "Retinopathy",
      label: "Left",
    },
    {
      value: "Right",
      name: "Retinopathy",
      label: "Right",
    },
    {
      value: "None",
      name: "Retinopathy",
      label: "None",
    },
  ];

  const lasercoagulation = [
    {
      value: "Left",
      name: "Lasercoagulation",
      label: "Left",
    },
    {
      value: "Right",
      name: "Lasercoagulation",
      label: "Right",
    },
    {
      value: "None",
      name: "Lasercoagulation",
      label: "None",
    },
  ];
  const nephropathy = [
    {
      value: "Creatinine",
      name: "Nephropathy",
      label: "Creatinine",
    },
    {
      value: "Proteinuria",
      name: "Nephropathy",
      label: "Proteinuria",
    },
    {
      value: "Micral",
      name: "Nephropathy",
      label: "Micral",
    },
    {
      value: "None",
      name: "Nephropathy",
      label: "None",
    },
  ];

  const motor = [
    {
      value: "Amyotrophy",
      name: "Motor",
      label: "Amyotrophy",
    },
    {
      value: "Radiculopathy",
      name: "Motor",
      label: "Radiculopathy",
    },
    {
      value: "DSPN",
      name: "Motor",
      label: "DSPN",
    },
  ];

  const autonomic = [
    {
      value: "Sudomotor",
      name: "Autonomic",
      label: "Sudomotor",
    },
    {
      value: "Cardiac",
      name: "Autonomic",
      label: "Cardiac",
    },
    {
      value: "Gastrointestinal",
      name: "Autonomic",
      label: "Gastrointestinal",
    },
    {
      value: "Genitourinary",
      name: "Autonomic",
      label: "Genitourinary",
    },
  ];

  const sensory = [
    {
      value: "Yes",
      label: "Yes",
      name: "Sensory",
    },
    {
      value: "No",
      label: "No",
      name: "Sensory",
    },
  ];
//   function onClick(){
//     dispatch({type:"storeData1",data1:data1})
   
//  }
  return (
    <form onSubmit={formik.handleSubmit} style={{padding:"1.5rem"}}>
      <Typography variant="h4" sx={{ mb: "1rem" }}>
        DIABETIC COMPLICATIONS
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6} lg={6}>
          <CheckBox
            checkContent={lasercoagulation}
            onChange={formik.handleChange}
            FormLabel="Diabetic retinopathy"
          />
          {formik.touched.Lasercoagulation && formik.errors.Lasercoagulation ? (
            <p className="error">*{formik.errors.Lasercoagulation}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} lg={6}>
          <CheckBox
            checkContent={retinopathy}
            onChange={formik.handleChange}
            FormLabel="Laser coagulation"
          />
          {formik.touched.Retinopathy && formik.errors.Retinopathy ? (
            <p className="error">*{formik.errors.Retinopathy}*</p>
          ) : null}
        </Grid>
        <Grid item md={12} lg={12}>
          <CheckBox
            checkContent={nephropathy}
            onChange={formik.handleChange}
            FormLabel="Nephropathy"
          />
          {formik.touched.Nephropathy && formik.errors.Nephropathy ? (
            <p className="error">*{formik.errors.Nephropathy}*</p>
          ) : null}
        </Grid>

        <Grid item md={4} lg={4}>
          <Textbox
            label="eGFR(ml/min/1.73m2)"
            type="text"
            name="eGFR"
            placeholder="Enter your eGFR"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.eGFR && formik.errors.eGFR ? (
            <p className="error">*{formik.errors.eGFR}*</p>
          ) : null}
        </Grid>
        <Grid item md={12} lg={12}>
          <CheckBox
            checkContent={motor}
            onChange={formik.handleChange}
            FormLabel="Motor"
          />
          {formik.touched.Motor && formik.errors.Motor ? (
            <p className="error">*{formik.errors.Motor}*</p>
          ) : null}
        </Grid>
        <Grid item md={12} lg={12}>
          <CheckBox
            checkContent={autonomic}
            onChange={formik.handleChange}
            FormLabel="Autonomic Neuropathy"
          />
          {formik.touched.Autonomic && formik.errors.Autonomic ? (
            <p className="error">*{formik.errors.Autonomic}*</p>
          ) : null}
        </Grid>
        <Grid item md={12} xl={12}>
          <RadioCom
            radio={sensory}
            OnChange={formik.handleChange}
            FormLabel="Sensory"
          />
          {formik.touched.Sensory && formik.errors.Sensory ? (
            <p className="error">*{formik.errors.Sensory}*</p>
          ) : null}
        </Grid>
        <Grid item md={12} lg={12} align="right">
        <Link to ="/DNS Score">
          <Button
          // onClick={onClick}
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
          </Link>
        </Grid>
      </Grid>
    </form>
  );
}
