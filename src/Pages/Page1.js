import { useFormik } from "formik";
import * as Yup from "yup";
import {  Button, Typography } from "@mui/material";
import RadioCom from "../component/Radio"
import SelectCom from "../component/Select";
import Textbox from "../component/Textbox";
import Grid from "@mui/material/node/Grid";

export default function Page1() {
  const formik = useFormik({
    initialValues: {Name: "", Radio: "", Select: "",Age:"",Dmselect:"",hname:"",Investigator:"",Email:"",Profession:"",Telephone:"" },
    validationSchema: Yup.object({
      Name: Yup.string().required("Required"),
      Email:Yup.string().email().required("Required"),
      Profession:Yup.string().required("Required"),
      Telephone:Yup.string().required("Required"),
      hname: Yup.string().required("Required"),
      Investigator: Yup.string().required("Required"),
      Select: Yup.string().required("Required"),
      Dmselect: Yup.string().required("Required"),
      Radio: Yup.string().required("Required"),
      Age: Yup.number().required("Required")      
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  
  const radio = [
    {
      value: "female",
      label: "female",
      name: "Radio"
    },
    {
      value: "male",
      label: "male",
      name: "Radio"
    }
  ];
  const select = [    
    {
      value: "Type 1",
      item: "Type 1"
    },
    {
      value: "Type 2",
      item: "Type 2"
    },
    {
      value: "Others",
      item: "Others"
    }
  ];
  const Dmselect = [    
    {
      value: "0-5 years",
      item: "0-5 years"
    },
    {
      value: "5-10 years",
      item: "5-10 years"
    },
    {
      value: "more than 10 years",
      item: "more than 10 years"
    }
  ];
  return (
    
       <form onSubmit={formik.handleSubmit} style={{padding:"1.5rem" }}>

      <Typography variant='h4'sx={{mb:'1rem'}}>Personal Information</Typography>
           <Grid container spacing={2} >
                  <Grid item  md={6} xl={6}>
      <Textbox
        label="Name"

        type="text"
        name="Name"
        placeholder="Enter your name"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        fullWidth
      />
      {formik.touched.Name && formik.errors.Name ? (
        <p>*{formik.errors.Name}*</p>
      ) : null}
      </Grid>
    <Grid item md={6} xl={6}>
<Textbox
        label="Age"
        type="text"
        name="Age"
        placeholder="Enter Age"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        fullWidth
      />
      {formik.touched.Age && formik.errors.Age ? (
        <p>*{formik.errors.Age}*</p>
      ) : null}
      
      </Grid>
     
                  <Grid item  md={6} xl={6}>

<RadioCom radio={radio} OnChange={formik.handleChange} FormLabel="Gender" />
      {formik.touched.Radio && formik.errors.Radio ? (
        <p>*{formik.errors.Radio}*</p>
      ) : null}
       </Grid>
    <Grid item md={6} xl={6}>
      <Textbox
        type="date"
        name="Date"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        fullWidth
      />
      {formik.touched.Date && formik.errors.Date ? (
        <p>*{formik.errors.Date}*</p>
      ) : null}
      </Grid>          
 <Grid item  md={6} xl={6}>
<Textbox
        label="Hospital name"
        type="text"
        name="hname"
        placeholder="Enter Hospital name"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        fullWidth
      />
      {formik.touched.hname && formik.errors.hname ? (
        <p>*{formik.errors.hname}*</p>
      ) : null}
       </Grid>
    <Grid item md={6} xl={6}>
<Textbox
        label="Investigator name"
        type="text"
        name="Investigator"
        placeholder="Enter Investigator name"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        fullWidth
      />
      {formik.touched.Investigator && formik.errors.Investigator ? (
        <p>*{formik.errors.Investigator}*</p>
      ) : null}
      </Grid>
      
      
     <Grid item  md={6} xl={6}>
      <Textbox
        label="Email"
        type="text"
        name="Email"
        placeholder="Enteryour email"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        fullWidth
      />
      {formik.touched.Email && formik.errors.Email ? (
        <p>*{formik.errors.Email}*</p>
      ) : null}
       </Grid>
    <Grid item md={6} xl={6}>
<Textbox
        label="Telephone no."
        type="text"
        name="Telephone"
        placeholder="Enter Telephone no."
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        fullWidth
      />
      {formik.touched.Telephone && formik.errors.Telephone ? (
        <p>*{formik.errors.Telephone}*</p>
      ) : null}
      </Grid>
      <Grid item  md={12} lg={12}>
<Textbox
        label="Profession"
        type="text"
        name="Profession"
        placeholder="Enter your Profession"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        fullWidth
      />
      {formik.touched.Profession && formik.errors.Profession ? (
        <p>*{formik.errors.Profession}*</p>
      ) : null}
      </Grid>
     <Grid item  md={6} lg={6}>
      <SelectCom
        select={select}
        name="Select"
        label="Type of diabetes"
        InputLabel="Type of diabetes"
        onChange={formik.handleChange}        
      />
      {formik.touched.Select && formik.errors.Select ? (
        <p>*{formik.errors.Select}*</p>
      ) : null}
</Grid>
<Grid item md={6} lg={6}>
<SelectCom
        select={Dmselect}
        name="Dmselect"
        label="Duration of DM"
        InputLabel="Duration of DM"
        onChange={formik.handleChange}              
      />
      {formik.touched.Dmselect && formik.errors.Dmselect ? (
        <p>*{formik.errors.Dmselect}*</p>
      ) : null}
      </Grid> 
      {/* </Grid>     */}
      {/* <Grid container align='right' sx={{}}>   */}
      <Grid item md={12} lg={12} align='right' >           
      <Button type="submit" sx={{backgroundColor: "#0AD0B2"}} >Continue</Button>
      </Grid>
      </Grid>      
    </form> 
  );
}
