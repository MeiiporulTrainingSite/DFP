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
    const data = [
        {
            id: "1",
            label: "Temp",
            present: "nds[0].temp.present",
            absent: "nds[0].temp.absent",
            reinforcement: "nds[0].temp.reinforcement"
        },
        {
            id: "2",
            label: "Pinprick",
            present: "nds[1].pinprick.present",
            absent: "nds[1].pinprick.absent",
            reinforcement: "nds[1].pinprick.reinforcement"
        },
        {
            id: "3",
            label: "Vibration",
            present: "nds[2].vibration.present",
            absent: "nds[2].vibration.absent",
            reinforcement: "nds[2].vibration.reinforcement"
        },
        {
            id: "4",
            label: "Ankle Reflex",
            present: "nds[3].anklereflex.present",
            absent: "nds[3].anklereflex.absent",
            reinforcement: "nds[3].anklereflex.reinforcement"
        }
    ];


    const formik = useFormik({
        initialValues: {
            nds: [
                { temp: { present: "", absent: "", reinforcement: "" } },
                { pinprick: { present: "", absent: "", reinforcement: "" } },
                { vibration: { present: "", absent: "", reinforcement: "" } },
                { anklereflex: { present: "", absent: "", reinforcement: "" } }
            ]
        },
        validationSchema: Yup.object({

        }),

        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));

        }
    });

    return (
        <form onSubmit={formik.handleSubmit} style={{ padding: "1.5rem" }}>
            <Typography variant="h4" sx={{ mb: "1rem" }}>
                NDS
            </Typography>
            <TableContainer>
                <Table sx={{ width: 600 }} aria-label="simple table">
                    {/* <TableHead>
              <TableRow component="h2">
                NDS
              
              </TableRow>
            </TableHead> */}
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
                                    {/* {formik.touched.{`currentlesion[${i}] `}}&& formik.errors.{`currentlesion[${i}]`}? (
          <p>*{formik.errors.{`currentlesion[${i}]`}}*</p>
        ) : null}  */}
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
                                        // value={formik.values.{`row.${i}.present`}}
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
