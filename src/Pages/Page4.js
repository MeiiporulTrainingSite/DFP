import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Typography } from "@mui/material";
// import RadioCom from "../component/Radio";
import SelectCom from "../component/Select";
// import Textbox from "../component/Textbox";
import Grid from "@mui/material/Grid";
import CheckBox from "../component/Checkbox";

import "../App.css";
const claudifiaction = [
    {
      change: "",
      value: "Rest pain",
      name: "Claudication",
      label: "Rest pain"
    },
    {
      value: "Change in color",
      name: "Claudication",
      label: "Change in color"
    },
    {
      value: "Gangrene",
      name: "Claudication",
      label: "Gangrene"
    },
    {
      value: "Gangrene",
      name: "Claudication",
      label: "Gangrene"
    },
    {
      value: "None",
      name: "Claudication",
      label: "None"
    },

  ];


export default function Page4() {
    const formik = useFormik({
        initialValues: {
            rutherfordGrade: '',
        },
        validationSchema: Yup.object({
            rutherfordGrade: Yup.string().required("Required"),


        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    const rutherGrade = [
        {
            value: "Stage 0 Asymptomatic",
            item: "Stage 0 Asymptomatic",
        },
        {
            value: "Stage 1 Mild claudication",
            item: "Stage 1 Mild claudication",
        },
        {
            value: "Stage 2 Moderate claudication (200 meters)",
            item: "Stage 2 Moderate claudication (200 meters)",
        },
        {
            value: " Stage 3 Severe claudication",
            item: "Stage 3 Severe claudication ",
        },
        {
            value: "Stage 4 Rest pain",
            item: "Stage 4 Rest pain ",
        },
        {
            value: "Stage 5 Ischemic ulceration not exceeding ulcer of the digits of the foot ",
            item: "Stage 5 Ischemic ulceration not exceeding ulcer of the digits of the foot ",
        },
        {
            value: "Stage 6 Severe ischemic ulcers or frank gangrene ",
            item: "Stage 6 Severe ischemic ulcers or frank gangrene ",
        }
    ];

    return (
       
        <form onSubmit={formik.handleSubmit} style={{ padding: "1.5rem" }}>
            <Typography variant="h4" sx={{ mb: "1rem" }}>
                Rutherford Grade (PAD)
            </Typography>
            <Grid container spacing={2}>
                <Grid item md={6} lg={6}>
                    <SelectCom
                        select={rutherGrade}
                        name="rutherfordGrade"
                        label="Rutherford Grade"
                        InputLabel="RutherfordGrade"
                        onChange={formik.handleChange}
                    />
                    {formik.touched.Select && formik.errors.Select ? (
                        <p className="error">*{formik.errors.Select}*</p>
                    ) : null}
                </Grid> 
                <Grid item md={12} xl={12}>
          <CheckBox checkContent={claudifiaction} onChange={formik.handleChange} FormLabel="Claudification" />
          {formik.touched.Claudication && formik.errors.Claudication ? (
            <p className="error">*{formik.errors.Claudication}*</p>
          ) : null}
        </Grid>

                <Grid item md={12} lg={12} align="right">
                    <Button
                        type="submit"
                        sx={{
                            backgroundColor: "#0AD0B2", color: "#fff", ":hover": {
                                border: "1px solid #0AD0B2",
                                color: "#0AD0B2"
                            }
                        }}
                    >
                        Continue
                    </Button>
                </Grid>
            </Grid>
        </form>
      
    );
}
