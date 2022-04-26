import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CheckNone from "../../component/CheckNone";
import "../../App.css";
export default function Observations() {
    const formik = useFormik({
    initialValues: {
        Callus: [],
        Halluxvalgus: [],
        Clawtoes: [],      
        Pesplanus: [],
        Pescavus: [],
        Charcots: [],
        Previousamputation:[],
    },
    validationSchema: Yup.object({
        Callus: Yup.array().required("Required").min(1, "Please check atleast one"),
        Halluxvalgus: Yup.array().required("Required").min(1, "Please check atleast one"),
        Clawtoes: Yup.array().required("Required").min(1, "Please check atleast one"),              
        Pesplanus: Yup.array().required("Required").min(1, "Please check atleast one"),
        Pescavus: Yup.array().required("Required").min(1, "Please check atleast one"),
        Charcots: Yup.array().required("Required").min(1, "Please check atleast one"),
        Previousamputation: Yup.array().required("Required").min(1, "Please check atleast one"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
 
  return (
    <form onSubmit={formik.handleSubmit} style={{padding:"1.5rem"}}>
      <Typography variant="h4" sx={{ mb: "1rem" }}>
      Other Observations (Foot)
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6} lg={6}>
          <CheckNone
            name="Callus"
            onChange={formik.handleChange}
            FormLabel="Callus"            
          />
          {formik.touched.Callus && formik.errors.Callus ? (
            <p className="error">*{formik.errors.Callus}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} lg={6}>
          <CheckNone
            name="Halluxvalgus"
            onChange={formik.handleChange}
            FormLabel="Halluxvalgus"
          />
          {formik.touched.Halluxvalgus && formik.errors.Halluxvalgus ? (
            <p className="error">*{formik.errors.Halluxvalgus}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} lg={6}>
          <CheckNone
            name="Clawtoes"
            onChange={formik.handleChange}
            FormLabel="Clawtoes"
          />
          {formik.touched.Clawtoes && formik.errors.Clawtoes ? (
            <p className="error">*{formik.errors.Clawtoes}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} lg={6}>
          <CheckNone
            name="Pesplanus"
            onChange={formik.handleChange}
            FormLabel="Pesplanus"
          />
          {formik.touched.Pesplanus && formik.errors.Pesplanus ? (
            <p className="error">*{formik.errors.Pesplanus}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} lg={6}>
          <CheckNone
            name="Pescavus"
            onChange={formik.handleChange}
            FormLabel="Pescavus"
          />
          {formik.touched.Pescavus && formik.errors.Pescavus ? (
            <p className="error">*{formik.errors.Pescavus}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} lg={6}>
          <CheckNone
            name="Charcots"
            onChange={formik.handleChange}
            FormLabel="Charcots"
          />
          {formik.touched.Charcots && formik.errors.Charcots ? (
            <p className="error">*{formik.errors.Charcots}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} lg={6}>
          <CheckNone
            name="Previousamputation"
            onChange={formik.handleChange}
            FormLabel="Previous Amputation"
          />
          {formik.touched.Previousamputation && formik.errors.Previousamputation ? (
            <p className="error">*{formik.errors.Previousamputation}*</p>
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
