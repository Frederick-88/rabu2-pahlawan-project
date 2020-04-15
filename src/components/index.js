import React from "react";
import { useFormik } from "formik";
import axios from 'axios';

const FormPahlawan = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      born: "",
      died: "",
      description: "",
      establishment: "",
      imageURL: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios.post('http://localhost:8000/dataJSON',{values}).then(res => {
        console.log(res);
        
      })
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Full Name : </label>
      <input
        name="fullname"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.fullname}
      ></input>

      <br />
      <label>Born : </label>
      <input
        name="born"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.born}
      ></input>

      <br />
      <label>Died : </label>
      <input
        name="died"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.died}
      ></input>

      <br />
      <label>Description : </label>
      <input
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
      ></input>

      <br />
      <label>Establishment : </label>
      <input
        name="establishment"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.establishment}
      ></input>

      <br />
      <label>ImageURL : </label>
      <input
        name="imageURL"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.imageURL}
      ></input>

      <br />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default FormPahlawan;
