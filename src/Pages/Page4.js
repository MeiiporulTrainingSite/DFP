import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Typography } from "@mui/material";
import SelectCom from "../component/Select";
import Textbox from "../component/Textbox";
import Grid from "@mui/material/Grid";
import CheckBox from "../component/Checkbox";

import "../App.css";
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
const cad = [
    {
        value: "Angina MI",
        name: "cad",
        label: "Angina MI"
    },
    {
        value: "CMP",
        name: "cad",
        label: "CMP"
    },
    {
        value: "Thrombolysis",
        name: "cad",
        label: "Thrombolysis"
    },
    {
        value: "Angioplasty",
        name: "cad",
        label: "Angioplasty"
    },
    {
        value: "CABG",
        name: "cad",
        label: "CABG"
    },

    {
        value: "None",
        name: "cad",
        label: "None"
    },
];
const stroke = [
    {
        value: "Lt/Rt",
        name: "stroke",
        label: "Lt/Rt"
    },
    {
        value: "MCA",
        name: "stroke",
        label: "MCA"
    },
    {
        value: "Others",
        name: "stroke",
        label: "Others"
    }
 
];
const htn = [
    {
        value: "ACEI",
        name: "htn",
        label: "ACEI"
    },
    {
        value: "ARBs",
        name: "htn",
        label: "ARBs"
    },
    {
        value: "Β Blockers",
        name: "htn",
        label: "Β Blockers"
    },
    {
        value: "CCB",
        name: "htn",
        label: "CCB"
    },
    {
        value: "Thiazides",
        name: "htn",
        label: "Thiazides"
    },

    {
        value: "α Blocker",
        name: "htn",
        label: "α Blocker"
    },
    {
        value: "None",
        name: "htn",
        label: "None"
    },

];
const smoker = [
    {
        value: "smoker",
        label: "Smoker",
        name: "smoker",
    },
    {
        value: "alcoholic",
        label: "Alcoholic",
        name: "alcoholic",
    },
    {
        value: "tobaccoChewing",
        label: "Tobacco Chewing",
        name: "tobaccoChewing",
    },
    { 
        value: "None",
        name: "smoker",
        label: "None"
    }
   
];

export default function Page4() {
    const formik = useFormik({
        initialValues: {
            rutherfordGrade: '',
            cad: [],
            stroke: [],
            htn: [],
            smoker: "",
            alcoholic: '',
            tobaccoChewing: "",
            historyPresentUlcer:''

        },
        validationSchema: Yup.object({
            rutherfordGrade: Yup.string().required("Required"),
            cad: Yup.array()
                .required("Required")
                .min(1, " Please check atleast one"),
            stroke: Yup.array()
                .required("Required")
                .min(1, " Please check atleast one"),
            htn: Yup.array()
                .required("Required")
                .min(1, " Please check atleast one"),
            smoker: Yup.string().required("Required"),
            
            historyPresentUlcer: Yup.string().required("Required"),

        }),

        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (

        <form onSubmit={formik.handleSubmit} style={{ padding: "1.5rem" }}>
            <Typography variant='h4' >
                Rutherford Grade (PAD)
            </Typography>
            <Grid container spacing={2}>
                <Grid item md={6} lg={6}>
                    <SelectCom
                        select={rutherGrade}
                        name="rutherfordGrade"
                        label="Rutherford Grade"
                        InputLabel="Rutherford Grade"
                        onChange={formik.handleChange}
                    />
                    {formik.touched.rutherfordGrade && formik.errors.rutherfordGrade ? (
                        <p className="error">*{formik.errors.rutherfordGrade}*</p>
                    ) : null}
                </Grid>

                <Grid item md={12} lg={12}>
                    <CheckBox checkContent={cad} onChange={formik.handleChange} FormLabel="CAD" />
                    {formik.touched.cad && formik.errors.cad ? (
                        <p className="error">*{formik.errors.cad}*</p>
                    ) : null}
                </Grid>

                <Grid item md={12} lg={12}>
                    <CheckBox checkContent={stroke} onChange={formik.handleChange} FormLabel="Stroke" />
                    {formik.touched.stroke && formik.errors.stroke ? (
                        <p className="error">*{formik.errors.stroke}*</p>
                    ) : null}
                </Grid>

                <Grid item md={12} lg={12}>
                    <CheckBox checkContent={htn} onChange={formik.handleChange} FormLabel="HTN" />
                    {formik.touched.htn && formik.errors.htn ? (
                        <p className="error">*{formik.errors.htn}*</p>
                    ) : null}
                </Grid>
                <Grid item md={12} lg={12}>
                    <Typography variant='h4' >
                       Personal History
                    </Typography></Grid>

                <Grid item md={12} lg={12}>
                <CheckBox checkContent={smoker} onChange={formik.handleChange}  />
                    {formik.touched.smoker && formik.errors.smoker ? (
                        <p className="error">*{formik.errors.smoker}*</p>
                    ) : null}
                </Grid>
                

                <Grid item md={6} xl={6}>
                    <Textbox
                        label="History Present Ulcer"
                        type="text"
                        name="historyPresentUlcer"
                        placeholder="History Present Ulcer"
                        variant="outlined"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        fullWidth
                    />
                    {formik.touched.historyPresentUlcer && formik.errors.historyPresentUlcer? (
                        <p className="error">*{formik.errors.historyPresentUlcer}*</p>
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
