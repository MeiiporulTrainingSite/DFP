// // import { useFormik } from "formik";
// import * as Yup from "yup";
// import { Button, Typography } from "@mui/material";
// import Grid from "@mui/material/Grid";
// import CheckNone from "./Checkobs";
// import "../../App.css";
// export default function Observations() {
//   const formik = useFormik({
//     initialValues: {
//       Callus: [],
//       Halluxvalgus: [],
//       Clawtoes: [],
//       Pesplanus: [],
//       Pescavus: [],
//       Charcots: [],
//       Previousamputation: [],
//     },
//     validationSchema: Yup.object({
//       Callus: Yup.array()
//         .required("Required")
//         .min(1, "Please check atleast one"),
//       Halluxvalgus: Yup.array()
//         .required("Required")
//         .min(1, "Please check atleast one"),
//       Clawtoes: Yup.array()
//         .required("Required")
//         .min(1, "Please check atleast one"),
//       Pesplanus: Yup.array()
//         .required("Required")
//         .min(1, "Please check atleast one"),
//       Pescavus: Yup.array()
//         .required("Required")
//         .min(1, "Please check atleast one"),
//       Charcots: Yup.array()
//         .required("Required")
//         .min(1, "Please check atleast one"),
//       Previousamputation: Yup.array()
//         .required("Required")
//         .min(1, "Please check atleast one"),
//     }),

//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit} style={{ padding: "1.5rem" }}>
//       <Typography variant="h4" sx={{ mb: "1rem" }}>
//         Other Observations (Foot)
//       </Typography>
//       {/* <Grid container spacing={2}>
//         <Grid item md={6} lg={6}>
//           <CheckNone
//             name="Callus"
//             onChange={formik.handleChange}
//             FormLabel="Callus"
//           />
//           {formik.touched.Callus && formik.errors.Callus ? (
//             <p className="error">*{formik.errors.Callus}*</p>
//           ) : null}
//         </Grid>
//         <Grid item md={6} lg={6}>
//           <CheckNone
//             name="Halluxvalgus"
//             onChange={formik.handleChange}
//             FormLabel="Halluxvalgus"
//           />
//           {formik.touched.Halluxvalgus && formik.errors.Halluxvalgus ? (
//             <p className="error">*{formik.errors.Halluxvalgus}*</p>
//           ) : null}
//         </Grid>
//         <Grid item md={6} lg={6}>
//           <CheckNone
//             name="Clawtoes"
//             onChange={formik.handleChange}
//             FormLabel="Clawtoes"
//           />
//           {formik.touched.Clawtoes && formik.errors.Clawtoes ? (
//             <p className="error">*{formik.errors.Clawtoes}*</p>
//           ) : null}
//         </Grid>
//         <Grid item md={6} lg={6}>
//           <CheckNone
//             name="Pesplanus"
//             onChange={formik.handleChange}
//             FormLabel="Pesplanus"
//           />
//           {formik.touched.Pesplanus && formik.errors.Pesplanus ? (
//             <p className="error">*{formik.errors.Pesplanus}*</p>
//           ) : null}
//         </Grid>
//         <Grid item md={6} lg={6}>
//           <CheckNone
//             name="Pescavus"
//             onChange={formik.handleChange}
//             FormLabel="Pescavus"
//           />
//           {formik.touched.Pescavus && formik.errors.Pescavus ? (
//             <p className="error">*{formik.errors.Pescavus}*</p>
//           ) : null}
//         </Grid>
//         <Grid item md={6} lg={6}>
//           <CheckNone
//             name="Charcots"
//             onChange={formik.handleChange}
//             FormLabel="Charcots"
//           />
//           {formik.touched.Charcots && formik.errors.Charcots ? (
//             <p className="error">*{formik.errors.Charcots}*</p>
//           ) : null}
//         </Grid>
//         <Grid item md={6} lg={6}>
//           <CheckNone
//             name="Previousamputation"
//             onChange={formik.handleChange}
//             FormLabel="Previous Amputation"
//           />
//           {formik.touched.Previousamputation && formik.errors.Previousamputation ? (
//             <p className="error">*{formik.errors.Previousamputation}*</p>
//           ) : null}
//         </Grid>
//          <Grid item md={12} lg={12} align="right">
//           <Button
//                       type="submit"
//             sx={{
//               backgroundColor: "#0AD0B2",
//               color: "#fff",
//               ":hover": {
//                 border: "1px solid #0AD0B2",
//                 color: "#0AD0B2",
//               },
//             }}
//           >
//             Continue
//           </Button>
//          </Grid>
//       </Grid> */}
//       <Grid container spacing={2}>
//         <Grid item container md={12} lg={12}>
//           <Grid item md={3} lg={3}>
//             <Typography sx={{ color: "#0AD0B2",mt:"0.5rem",fontSize:"1rem" }}>Callus</Typography>
//           </Grid>
//           <Grid item md={5} lg={5}>
//             <CheckNone name="Callus" onChange={formik.handleChange} />
//             {formik.touched.Callus && formik.errors.Callus ? (
//               <p className="error">*{formik.errors.Callus}*</p>
//             ) : null}
//           </Grid>
//         </Grid>
//         <Grid item container md={12} lg={12}>
//           <Grid item md={3} lg={3}>
//             <Typography sx={{ color: "#0AD0B2",mt:"0.5rem" }}>Halluxvalgus</Typography>
//           </Grid>
//           <Grid item md={5} lg={5}>
//             <CheckNone name="Halluxvalgus" onChange={formik.handleChange} />
//             {formik.touched.Halluxvalgus && formik.errors.Halluxvalgus ? (
//               <p className="error">*{formik.errors.Halluxvalgus}*</p>
//             ) : null}
//           </Grid>
//         </Grid>
//         <Grid container item md={12} lg={12}>
//           <Grid item md={3} lg={3}>
//             <Typography sx={{ color: "#0AD0B2",mt:"0.5rem" }}>Clawtoes</Typography>
//           </Grid>
//           <Grid item md={5} lg={5}>
//             <CheckNone name="Clawtoes" onChange={formik.handleChange} />
//             {formik.touched.Clawtoes && formik.errors.Clawtoes ? (
//               <p className="error">*{formik.errors.Clawtoes}*</p>
//             ) : null}
//           </Grid>
//         </Grid>
//         <Grid container item md={12} lg={12}>
//           <Grid item md={3} lg={3}>
//             <Typography sx={{ color: "#0AD0B2",mt:"0.5rem" }}>Pesplanus</Typography>
//           </Grid>
//           <Grid item md={5} lg={5}>
//             <CheckNone name="Pesplanus" onChange={formik.handleChange} />
//             {formik.touched.Pesplanus && formik.errors.Pesplanus ? (
//               <p className="error">*{formik.errors.Pesplanus}*</p>
//             ) : null}
//           </Grid>
//         </Grid>
//         <Grid container item md={12} lg={12}>
//           <Grid item md={3} lg={3}>
//             <Typography sx={{ color: "#0AD0B2",mt:"0.5rem" }}>Pescavus</Typography>
//           </Grid>
//           <Grid item md={5} lg={5}>
//             <CheckNone name="Pescavus" onChange={formik.handleChange} />
//             {formik.touched.Pescavus && formik.errors.Pescavus ? (
//               <p className="error">*{formik.errors.Pescavus}*</p>
//             ) : null}
//           </Grid>
//         </Grid>
//         <Grid item container md={12} lg={12}>
//           <Grid item md={3} lg={3}>
//             <Typography sx={{ color: "#0AD0B2",mt:"0.5rem" }}>Charcots</Typography>
//           </Grid>
//           <Grid item md={5} lg={5}>
//             <CheckNone name="Charcots" onChange={formik.handleChange} />
//             {formik.touched.Charcots && formik.errors.Charcots ? (
//               <p className="error">*{formik.errors.Charcots}*</p>
//             ) : null}
//           </Grid>
//         </Grid>
//         <Grid item container md={12} lg={12}>
//           <Grid item md={3} lg={3}>
//             <Typography sx={{ color: "#0AD0B2",mt:"0.5rem" }}>
//               Previousamputation
//             </Typography>
//           </Grid>
//           <Grid item md={5} lg={5}>
//             <CheckNone
//               name="Previousamputation"
//               onChange={formik.handleChange}
//             />
//             {formik.touched.Previousamputation &&
//             formik.errors.Previousamputation ? (
//               <p className="error">*{formik.errors.Previousamputation}*</p>
//             ) : null}
//           </Grid>
//         </Grid>
//         <Grid item md={12} lg={12} align="right">
//           <Button
//             type="submit"
//             sx={{
//               backgroundColor: "#0AD0B2",
//               color: "#fff",
//               ":hover": {
//                 border: "1px solid #0AD0B2",
//                 color: "#0AD0B2",
//               },
//             }}
//           >
//             Continue
//           </Button>
//         </Grid>
//       </Grid>
//     </form>
//   );
// }
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Typography,
  Table,
  TableRow,
  TableBody,
  TableContainer,
  TableCell,
} from "@mui/material";
import RadioCom from "../../component/Radio";
import Textbox from "../../component/Textbox";
import Grid from "@mui/material/Grid";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../App.css";

export default function VPT() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.storeData);
  let data1 = {};

  const formik = useFormik({
    initialValues: {
      CarotidRight: "",
      CarotidLeft: "",
      BrachialRight: "",
      BrachialLeft: "",
      RadialRight: "",
      RadialLeft: "",
      FemoralRight: "",
      FemoralLeft: "",
      PoplitealRight: "",
      PoplitealLeft: "",
      PTARight: "",
      PTALeft: "",
      DorsalispedisRight: "",
      DorsalispedisLeft: "",
    },
    // validationSchema: Yup.object({

    // }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const obs = [
    {
      label: "Carotid",
      name: "CarotidRight",
      name1: "CarotidLeft",
    },
    {
      label: "Brachial",
      name: "BrachialRight",
      name1: "BrachialLeft",
    },
    {
      label: "Radial",
      name: "RadialRight",
      name1: "RadialLeft",
    },
    {
      label: "Femoral",
      name: "FemoralRight",
      name1: "FemoralLeft",
    },
    {
      label: "Popliteal",
     
      name: "PoplitealRight",
      name1: "PoplitealLeft",
    },
    {
      label: "PTA",
      name: "PTARight",
      name1: "PTALeft",
    },
    {
      label: "Dorsalis pedis",
     
      name: "DorsalispedisRight",
      name1: "DorsalispedisLeft",
    },
  ];
  return (
    <form onSubmit={formik.handleSubmit} style={{ padding: "1.5rem" }}>
      <Typography variant="h4" sx={{ mb: "1rem" }}>
       Pulsations: Bruit (If any)
      </Typography>
      <Grid container spacing={1.5}>
        {obs.map((vpt, i) => (
          <Grid item md={12} key={i + 1}>
            <Grid container spacing={2}>
              <Grid item md={3} sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ fontSize: "1rem", color: "#0AD0B2" }}>
                  {vpt.label}
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Textbox
                  textarea={vpt.textarea}
                  name={vpt.name}
                  onChange={formik.handleChange}
                  type="text"
                  label="Right"
                />
              </Grid>
              <Grid item md={4}>
                <Textbox
                  textarea={vpt.textarea}
                  onChange={formik.handleChange}
                  name={vpt.name1}
                  type="text"
                  label="Left"
                />
              </Grid>
            </Grid>
          </Grid>
        ))}

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
              marginRight: "1rem",
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
                color: "#0AD0B2",
              },
            }}
          >
            next
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
