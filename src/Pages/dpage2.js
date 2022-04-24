import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Typography } from "@mui/material";

import Textbox from "../component/Textbox";
import Grid from "@mui/material/Grid";

import "../App.css";
export default function Dpage1() {
  const formik = useFormik({
    initialValues: {
      Dexa_RT_Tscore: "",
      Dexa_RT_Zscore: "",
      Dexa_LT_Tscore: "",
      Dexa_LT_Zscore: "",
      Vertebra_RT_Tscore: "",
      Vertebra_RT_Zscore: "",
      Vertebra_LT_Tscore: "",
      Vertebra_LT_Zscore: "",
      Hip_RT_Tscore: "",
      Hip_RT_Zscore: "",
      Hip_LT_Tscore: "",
      Hip_LT_Zscore: "",
    },
    validationSchema: Yup.object({
      Dexa_RT_Tscore: Yup.string().required("Required"),
      Dexa_RT_Zscore: Yup.string().required("Required"),
      Dexa_LT_Tscore: Yup.string().required("Required"),
      Dexa_LT_Zscore: Yup.string().required("Required"),
      Vertebra_RT_Tscore: Yup.string().required("Required"),
      Vertebra_RT_Zscore: Yup.string().required("Required"),
      Vertebra_LT_Tscore: Yup.string().required("Required"),
      Vertebra_LT_Zscore: Yup.string().required("Required"),
      Hip_RT_Tscore: Yup.string().required("Required"),
      Hip_RT_Zscore: Yup.string().required("Required"),
      Hip_LT_Tscore: Yup.string().required("Required"),
      Hip_LT_Zscore: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} style={{ padding: "1.5rem" }}>
      <Typography variant="h4" sx={{ mb: "1rem" }}>
        Probe to bone test:
      </Typography>
      <Typography
        sx={{ color: "#0AD0B2", fontSize: "1rem", mb: "1rem", mt: "1rem" }}
      >
        Dexa :
      </Typography>
      <Grid container spacing={3} columnSpacing={1.5}>
        <Grid item md={6} xl={6}>
          <Textbox
            label="RT-T score"
            type="text"
            name="Dexa_RT_Tscore"
            placeholder="Enter RT-T score value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Dexa_RT_Tscore && formik.errors.Dexa_RT_Tscore ? (
            <p className="error">*{formik.errors.Dexa_RT_Tscore}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} xl={6}>
          <Textbox
            label="RT-Z score"
            type="text"
            name="Dexa_RT_Zscore"
            placeholder="Enter RT-Z score value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Dexa_RT_Zscore && formik.errors.Dexa_RT_Zscore ? (
            <p className="error">*{formik.errors.Dexa_RT_Zscore}*</p>
          ) : null}
        </Grid>

        <Grid item md={6} xl={6}>
          <Textbox
            label="LT-T score"
            type="text"
            name="Dexa_LT_Tscore"
            placeholder="Enter LT-T score value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Dexa_LT_Tscore && formik.errors.Dexa_LT_Tscore ? (
            <p className="error">*{formik.errors.Dexa_LT_Tscore}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} xl={6}>
          <Textbox
            label="LT-Z score"
            type="text"
            name="Dexa_LT_Zscore"
            placeholder="Enter LT-Z score value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Dexa_LT_Zscore && formik.errors.Dexa_LT_Zscore ? (
            <p className="error">*{formik.errors.Dexa_LT_Zscore}*</p>
          ) : null}
        </Grid>

        <Grid item md={12} xl={12}>
          <Typography
            sx={{
              color: "#0AD0B2",
              fontSize: "1rem",
              mb: "-0.5rem",
              mt: "-0.5rem",
            }}
          >
            Vertebra:
          </Typography>
        </Grid>

        <Grid item md={6} xl={6}>
          <Textbox
            label="RT-T score"
            type="text"
            name="Vertebra_RT_Tscore"
            placeholder="Enter RT-T score value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Vertebra_RT_Tscore &&
          formik.errors.Vertebra_RT_Tscore ? (
            <p className="error">*{formik.errors.Vertebra_RT_Tscore}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} xl={6}>
          <Textbox
            label="RT-Z score"
            type="text"
            name="Vertebra_RT_Zscore"
            placeholder="Enter RT-Z score value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Vertebra_RT_Zscore &&
          formik.errors.Vertebra_RT_Zscore ? (
            <p className="error">*{formik.errors.Vertebra_RT_Zscore}*</p>
          ) : null}
        </Grid>

        <Grid item md={6} xl={6}>
          <Textbox
            label="LT-T score"
            type="text"
            name="Vertebra_LT_Tscore"
            placeholder="Enter LT-T score value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Vertebra_LT_Tscore &&
          formik.errors.Vertebra_LT_Tscore ? (
            <p className="error">*{formik.errors.Vertebra_LT_Tscore}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} xl={6}>
          <Textbox
            label="LT-Z score"
            type="text"
            name="Vertebra_LT_Zscore"
            placeholder="Enter LT-Z score value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Vertebra_LT_Zscore &&
          formik.errors.Vertebra_LT_Zscore ? (
            <p className="error">*{formik.errors.Vertebra_LT_Zscore}*</p>
          ) : null}
        </Grid>

        <Grid item md={12} xl={12}>
          <Typography
            sx={{
              color: "#0AD0B2",
              fontSize: "1rem",
              mb: "-0.5rem",
              mt: "-0.5rem",
            }}
          >
            Hip:
          </Typography>
        </Grid>

        <Grid item md={6} xl={6}>
          <Textbox
            label="RT-T score"
            type="text"
            name="Hip_RT_Tscore"
            placeholder="Enter RT-T score value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Hip_RT_Tscore && formik.errors.Hip_RT_Tscore ? (
            <p className="error">*{formik.errors.Hip_RT_Tscore}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} xl={6}>
          <Textbox
            label="RT-Z score"
            type="text"
            name="Hip_RT_Zscore"
            placeholder="Enter RT-Z score value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Hip_RT_Zscore && formik.errors.Hip_RT_Zscore ? (
            <p className="error">*{formik.errors.Hip_RT_Zscore}*</p>
          ) : null}
        </Grid>

        <Grid item md={6} xl={6}>
          <Textbox
            label="LT-T score"
            type="text"
            name="Hip_LT_Tscore"
            placeholder="Enter LT-T score value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Hip_LT_Tscore && formik.errors.Hip_LT_Tscore ? (
            <p className="error">*{formik.errors.Hip_LT_Tscore}*</p>
          ) : null}
        </Grid>
        <Grid item md={6} xl={6}>
          <Textbox
            label="LT-Z score"
            type="text"
            name="Hip_LT_Zscore"
            placeholder="Enter LT-Z score value"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
          />
          {formik.touched.Hip_LT_Zscore && formik.errors.Hip_LT_Zscore ? (
            <p className="error">*{formik.errors.Hip_LT_Zscore}*</p>
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
