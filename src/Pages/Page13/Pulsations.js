import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CheckNone from "../../component/CheckNone";
import "../../App.css";
export default function Pulsations() {
    const formik = useFormik({
    initialValues: {
        Carotid: [],
        Brachial: [],
        Radial: [],      
        Femoral: [],
        Popliteal: [],
        PTA: [],
        Dorsalispedis:[],
    },
    validationSchema: Yup.object({
        Carotid: Yup.array().required("Required").min(1, "Please check atleast one"),
        Brachial: Yup.array().required("Required").min(1, "Please check atleast one"),
        Radial: Yup.array().required("Required").min(1, "Please check atleast one"),              
        Femoral: Yup.array().required("Required").min(1, "Please check atleast one"),
        Popliteal: Yup.array().required("Required").min(1, "Please check atleast one"),
        PTA: Yup.array().required("Required").min(1, "Please check atleast one"),
        Dorsalispedis: Yup.array().required("Required").min(1, "Please check atleast one"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
 
  return (
    <form onSubmit={formik.handleSubmit} style={{padding:"1.5rem"}}>
      <Typography variant="h4" sx={{ mb: "1rem" }}>
      Pulsations: Bruit (If any)
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6} lg={6}>
          <CheckNone
            name="Carotid"
            onChange={formik.handleChange}
            FormLabel="Carotid"            
          />
          {formik.touched.Carotid && formik.errors.Carotid ? (
            <p className="error">*{formik.errors.Carotid}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} lg={6}>
          <CheckNone
            name="Brachial"
            onChange={formik.handleChange}
            FormLabel="Brachial"
          />
          {formik.touched.Brachial && formik.errors.Brachial ? (
            <p className="error">*{formik.errors.Brachial}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} lg={6}>
          <CheckNone
            name="Radial"
            onChange={formik.handleChange}
            FormLabel="Radial"
          />
          {formik.touched.Radial && formik.errors.Radial ? (
            <p className="error">*{formik.errors.Radial}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} lg={6}>
          <CheckNone
            name="Femoral"
            onChange={formik.handleChange}
            FormLabel="Femoral"
          />
          {formik.touched.Femoral && formik.errors.Femoral ? (
            <p className="error">*{formik.errors.Femoral}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} lg={6}>
          <CheckNone
            name="Popliteal"
            onChange={formik.handleChange}
            FormLabel="Popliteal"
          />
          {formik.touched.Popliteal && formik.errors.Popliteal ? (
            <p className="error">*{formik.errors.Popliteal}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} lg={6}>
          <CheckNone
            name="PTA"
            onChange={formik.handleChange}
            FormLabel="PTA"
          />
          {formik.touched.PTA && formik.errors.PTA ? (
            <p className="error">*{formik.errors.PTA}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} lg={6}>
          <CheckNone
            name="Dorsalispedis"
            onChange={formik.handleChange}
            FormLabel="Dorsalis pedis"
          />
          {formik.touched.Dorsalispedis && formik.errors.Dorsalispedis ? (
            <p className="error">*{formik.errors.Dorsalispedis}*</p>
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
