import {

    Grid,
    Button,
    TextField,
    Typography
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";


export default function Nds() {
    const formik = useFormik({
        initialValues: {
            nds_temp_present: "",
            nds_temp_absent: "",
            nds_temp_reinforcement: "",
            nds_pinprick_present: "",
            nds_pinprick_absent: "",
            nds_pinprick_reinforcement: "",
            nds_vibration_present: "",
            nds_vibration_absent: "",
            nds_vibration_reinforcement: "",
            nds_anklereflex_present: "",
            nds_anklereflex_absent: "",
            nds_anklereflex_reinforcement: "",
            Total:""
        },
        validationSchema: Yup.object({
            Total:Yup.string().required("required")
        }),

        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));

        }
    });
    const data = [
        {
            id: "1",
            label: "Temp",
            present: " nds_temp_present",
            absent: " nds_temp_absent",
            reinforcement: "nds_temp_reinforcement"

        },
        {
            id: "2",
            label: "Pinprick",
            present: " nds_pinprick_present",
            absent: "nds_pinprick_absent",
            reinforcement: "nds_pinprick_reinforcement"
        },
        {
            id: "3",
            label: "Vibration",
            present: " nds_anklereflex_present",
            absent: " nds_vibration_absent",
            reinforcement: "nds_vibration_reinforcement"
        },
        {
            id: "4",
            label: "Ankle Reflex",
            present: " nds_anklereflex_present",
            absent: "nds_anklereflex_absent",
            reinforcement: "nds_anklereflex_reinforcement"
        }
    ];

    return (
        <form onSubmit={formik.handleSubmit} style={{ padding: "1.5rem" }}>
            <Typography variant="h4" sx={{ mb: "1rem" }}>
                NDS
            </Typography>
            <TableContainer>
                <Table sx={{ width: 600 }} aria-label="simple table">
                    <TableBody>
                        {data.map((row, i) => (
                            <TableRow key={row.i}>
                                <TableCell
                                    sx={{ width: "150px" }}
                                    padding="checkbox"
                                    component="th"
                                    scope="row"
                                >
                                    {row.label}
                                </TableCell>
                                <TableCell align="center">
                                    <TextField
                                        value={formik.values.row}
                                        label="Present"
                                        type="number"
                                        name={row.present}
                                        placeholder="Present"
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
                                        label="Absent"
                                        type="number"
                                        name={row.absent}
                                        placeholder="Absent"
                                        variant="outlined"
                                        // disabled={!checked}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <TextField
                                        value={formik.values.row}
                                        label="Reinforcement"
                                        type="number"
                                        name={row.reinforcement}
                                        placeholder="Reinforcement"
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
                <TableRow>
                    <TableCell component="th" scope="row">
                       Total
                    </TableCell>
                    <TableCell align="left" >
                        <TextField sx={{ width: '200px', m: '0 0 0 90px' }}
                            label='Total'
                            type='text'
                            name='Total'
                            placeholder='Total'
                            variant="outlined"
                            onChange={formik.handleChange} />
                        {formik.touched.Total && formik.errors.Total ? (<p>{formik.errors.Total}</p>) : null}
                    </TableCell>
                </TableRow>
            </TableContainer>

            <Grid item md={12} lg={12} align="right">
                <Button
                    type="submit"
                    sx={{
                        backgroundColor: "#0AD0B2",
                        color: "#fff",
                        ":hover": {
                            border: "1px solid #0AD0B2",
                            color: "#0AD0B2"
                        },
                        marginRight: "1rem"
                    }}
                >
                    Save
                </Button>

                <Button
                    sx={{
                        backgroundColor: "#0AD0B2",
                        color: "#fff",
                        ":hover": {
                            border: "1px solid #0AD0B2",
                            color: "#0AD0B2"
                        }
                    }}
                >
                    next
                </Button>
            </Grid>
        </form>
    );
}
