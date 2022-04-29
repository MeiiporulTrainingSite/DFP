import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Typography } from "@mui/material";
import RadioCom from "../../component/Radio";
import SelectCom from "../../component/Select";
import TextScore from "./TextScore";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "../../App.css";

export default function Sinbad() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.storeData);

  const formik = useFormik({
    initialValues: {
      Sinbad: [
        { Site: { SiteD1: "", SiteD2: "" } },
        { Ischemia: { IschemiaD1: "", IschemiaD2: "" } },
        { Neturopathy: { NeturoD1: "", NeturoD2: "" } },
        { BacterialInfection: { BID1: "", BID2: "" } },
        { Area: { AreaD1: "", AreaD2: "" } },
        { Depth: { DepthD1: "", DepthD2: "" } },
        { TotalScore: "" },
      ],
      users: [{
        name: "deshan madurajith",
        email: "desh@email.com"
      }],

    Site1:"",
    Site2:""
    },
    validationSchema: Yup.object({
      Site1:Yup.string().required(),
    sin: Yup.array().of(
        Yup.object().shape({
          Site1: Yup.string().required("Name required"),
          Site2: Yup.string()
            .required("email required")
            // .email("Enter valid email")
        })
      ),
      users: Yup.array().of(
        Yup.object().shape({
          name: Yup.string().required("Name required"),
          email: Yup.string()
            .required("email required")
            .email("Enter valid email")
        })
      )
    }),
    onSubmit: (values) => {
      dispatch({ type: "storeData", data: values });
      alert(JSON.stringify(values, null, 2));
    },
  });
  const table = [
    {
      subtitle: "Site",
      ST1: "Forefoot",
      ST2: "Midfoot and Hindfoot",
      name1:"Site1",
      name2:"Site2",
      touched:formik.touched.Site1,
      error:formik.errors.Site1,
      touched1:formik.touched.Site1,
      error1:formik.errors.Site1,
    },
    {
      subtitle: "Ischemia",
      ST1: "Pedal blood flow intact: at least one pulse Palpable",
      ST2: "Clinical evidence of reduced pedal blood Flow",
      name1:"Sinbad[1].Ischemia.IschemiaD1",
      name2:"Sinbad[1].Ischemia.IschemiaD2"
    },
    {
      subtitle: "Neuropathy ",
      ST1: "Protective sensation intact",
      ST2: "Protective sensation lost",
      name1:"Sinbad[2].Neturopathy.NeturoD1",
      name2:"Sinbad[2].Neturopathy.NeturoD2"
    },
    {
      subtitle: "Bacterial infection ",
      ST1: "None",
      ST2: "Present",
      name1:"Sinbad[3].BacterialInfection.BID1",
      name2:"Sinbad[3].BacterialInfection.BID2"
    },
    {
      subtitle: "Area  ",
      ST1: "Ulcer<1cm2",
      ST2: "Ulcer>1cm2",
      name1:"Sinbad[4].Area.AreaD1",
      name2:"Sinbad[4].Area.AreaD2"
    },
    {
      subtitle: "Depth  ",
      ST1: "Ulcer confined to skin and subcutaneous tissue",
      ST2: "Ulcer reaching muscles, tendon or deeper",
      name1:"Sinbad[5].Depth.DepthD1",
      name2:"Sinbad[5].Depth.DepthD2"
    },
  ];

  return (
    <form onSubmit={formik.handleSubmit} style={{ padding: "1.5rem" }}>
      <Typography variant="h4" sx={{ mb: "1rem" }}>
        SINBAD
      </Typography>
      <Grid container spacing={1.5}>
        <Grid item md={12} mb={"1rem"}>
          <Grid container>
            <Grid item md={3}>
              <Typography sx={{ fontSize: "1.2rem", color: "#0AD0B2" }}>
                Category{" "}
              </Typography>
            </Grid>
            <Grid item md={4.7}>
              <Typography sx={{ fontSize: "1.2rem", color: "#0AD0B2" }}>
                Definition{" "}
              </Typography>
            </Grid>
            <Grid item md={3} align="center">
              <Typography sx={{ fontSize: "1.2rem", color: "#0AD0B2" }}>
                SINBAD Score{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {table.map((sinbad, i) => (
          <Grid item md={12} key={i + 1}>
            <Grid container>
              <Grid item md={3}>
                <Typography>{sinbad.subtitle}</Typography>
              </Grid>
              <Grid item md={4.7} container spacing={1}>
                <Grid item md={12}>
                  <Typography>{sinbad.ST1}</Typography>
                </Grid>
                <Grid item md={12}>
                  <Typography>{sinbad.ST2}</Typography>
                </Grid>
              </Grid>

              <Grid item md={3} container spacing={1} align="center">
                {/* <Gird container> */}
                <Grid item md={12}>
                  <TextScore
                    type="number"
                    name={sinbad.name1}
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                  />
                   {formik.touched.Radio && formik.errors.Radio ? (
            <p className="error">*{formik.errors.Radio}*</p>
          ) : null}
                </Grid>
                <Grid item md={12}>
                  <TextScore
                    type="number"
                    name={sinbad.name2}
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                  />
                  {sinbad.touched && sinbad.error? (
                    <p className="error">*{sinbad.error}*</p>
                  ) : null}
                </Grid>

                {/* </Gird> */}
              </Grid>
            </Grid>
          </Grid>
        ))}
        <Grid item md={12}>
          <Grid container>
            <Grid item md={3}>
              <Typography></Typography>
            </Grid>
            <Grid item md={5.7}>
              <Typography sx={{ fontSize: "1.2rem", color: "#0AD0B2" }}>
                Total Possible Score
              </Typography>
            </Grid>

            <Grid item md={3}>
              {/* <Gird container> */}

              <TextScore
                type="number"
                name="Sinbad[6].TotalScore"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                fullWidth
              />
            </Grid>
          </Grid>
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
          <Link to="/DiabeticComplications">
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
          </Link>
        </Grid>
      </Grid>
    </form>
  );
}
