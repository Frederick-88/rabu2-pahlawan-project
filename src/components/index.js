import React from "react";
import { useFormik } from "formik";
import axios from "axios";
// import {Link, Router} from 'react-router-dom'
import { Card } from "react-bootstrap";
import "./index.css";

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
      axios.post("http://localhost:8000/dataJSON", { values }).then((res) => {
        window.alert("BERHASIL MENAMBAH DATA.");
      });
    },
  });

  return (
    <div className="div-bg">
      <Card className="card-bg">
        <Card.Img
          className="img-card"
          variant="top"
          src="https://image.shutterstock.com/image-vector/illustration-abstract-texture-blocks-indonesia-600w-1439717390.jpg"
        />
        <Card.Body>
          <form onSubmit={formik.handleSubmit}>
            <label></label>
            <input
              className="input-fx"
              name="fullname"
              placeholder="Full Name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.fullname}
            ></input>

            <br />
            <label></label>
            <input
              className="input-fx"
              name="born"
              placeholder="Born"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.born}
            ></input>

            <br />
            <label></label>
            <input
              className="input-fx"
              name="died"
              placeholder="Died"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.died}
            ></input>

            <br />
            <label></label>
            <input
              className="input-fx"
              name="description"
              placeholder="Description"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.description}
            ></input>

            <br />
            <label></label>
            <input
              className="input-fx"
              name="establishment"
              placeholder="Establishment"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.establishment}
            ></input>

            <br />
            <label></label>
            <input
              className="input-fx"
              name="imageURL"
              placeholder="ImageURL"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.imageURL}
            ></input>

            <br />
            <button className="button-fx" type="submit">
              Submit
            </button>

            {/* <Router>
            <Link to="/dashboard">
              <button type="button">See National Heroes List</button>
            </Link>
            </Router> */}

          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FormPahlawan;
