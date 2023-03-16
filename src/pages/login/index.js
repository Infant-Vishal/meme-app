import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Card } from "react-bootstrap";
import _ from "lodash";
import { toast, ToastContainer } from "react-toastify";
import "../../assets/css/loginPage.css";

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const loginCredentials = {
    email: "infantvishal@gmail.com",
    password: "qwerty123",
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Please enter the valid email")
        .required("Please enter the valid email"),
      password: yup.string().required("Please enter the valid password"),
    }),
    onSubmit: (values) => {
      if (_.isEqual(values, loginCredentials)) {
        localStorage.setItem("memePageLoggedIn", true);
        toast.success("Updated successfully", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/memes");
      } else {
        toast.error("Invalid crendentials", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    },
  });

  return (
    <div className="login-overall-bg">
      <ToastContainer />
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title className="text-center">Login</Card.Title>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="text"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="form-control"
                placeholder="Enter your Email Address"
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="form-control"
                placeholder="Enter your Password"
              />
              {formik.errors.password && formik.touched.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginPage;
