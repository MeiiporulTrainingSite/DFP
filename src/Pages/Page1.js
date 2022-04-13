import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import RadioCom from "../component/Radio"
import SelectCom from "../component/Select";
import CheckBox from "../component/Checkbox";
import Textbox from "../component/Textbox";

export default function Page1() {
  const formik = useFormik({
    initialValues: { FirstName: "", Radio: "", LastName: [], Select: "" },
    validationSchema: Yup.object({
      FirstName: Yup.string().required("Required"),
      Select: Yup.string().required("Required"),
      Radio: Yup.string().required("Required"),
      LastName: Yup.array()
        .required("required")
        .max(2, "only two")
        .min(1, "atleast one")
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  const check = [
    {
      change: "",
      value: "kumar",
      name: "LastName",
      label: "kumar"
    },
    {
      value: "sasi",
      name: "LastName",
      label: "sasi"
    }
  ];

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

  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Personal Information</h3>
      <TextField
        label="First Name"
        type="text"
        name="FirstName"
        placeholder="Enter First name"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        fullWidth
      />
      {formik.touched.FirstName && formik.errors.FirstName ? (
        <p>*{formik.errors.FirstName}*</p>
      ) : null}

<TextField
        label="Age"
        type="text"
        name="Age"
        placeholder="EnterAge"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        fullWidth
      />
      {formik.touched.Age && formik.errors.Age ? (
        <p>*{formik.errors.Age}*</p>
      ) : null}

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
      <CheckBox checkContent={check} onChange={formik.handleChange} />
      {formik.touched.LastName && formik.errors.LastName ? (
        <p>*{formik.errors.LastName}*</p>
      ) : null}
      <RadioCom radio={radio} OnChange={formik.handleChange} />
      {formik.touched.Radio && formik.errors.Radio ? (
        <p>*{formik.errors.Radio}*</p>
      ) : null}
      <Button type="submit">submit</Button>
    </form>
  );
}
