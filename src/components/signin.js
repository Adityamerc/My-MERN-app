import React from "react";
import { useFormik } from "formik";
import * as actionCreators from "../actions/action";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function MernSignIn(props) {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Enter a valid Email!";
    } else if (values.email.length < 5) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Enter a valid Password!";
    } else if (values.password.length < 5) {
      errors.password = "Must be > 5";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",

      password: "",
    },
    validate,
    onSubmit: (values) => {
      props.actions.fetch_data(values.email).catch(() => alert("Failed"));
    },
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ToastContainer />
      <form onSubmit={formik.handleSubmit}>
        <h3>Sign In</h3>

        <label style={{ fontWeight: "bold", marginTop: 15 }}>Email </label>

        <div>
          <input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="eg. DJ@zzz.com"
            style={
              formik.touched.email && formik.errors.email
                ? { border: "2px solid red", borderRadius: 5, padding: 7 }
                : { borderRadius: 5, border: "2px solid white", padding: 7 }
            }
          />
          {formik.touched.email && formik.errors.email && (
            <span style={{ display: "block", color: "red" }}>
              {formik.errors.email}
            </span>
          )}
        </div>

        <label style={{ fontWeight: "bold", marginTop: 15 }}>Password</label>

        <div>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="***************"
            style={
              formik.touched.password && formik.errors.password
                ? { border: "2px solid red", borderRadius: 5, padding: 7 }
                : { borderRadius: 5, border: "2px solid white", padding: 7 }
            }
          />
          {formik.touched.password && formik.errors.password && (
            <span style={{ display: "block", color: "red" }}>
              {formik.errors.password}
            </span>
          )}
        </div>

        <div
          style={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              border: "none",
              borderRadius: 6,
              background: "#1565e6",
              color: "white",
              height: 30,
            }}
          >
            Sign In
          </button>
          <div style={{ textAlign: "center", fontWeight: "bold" }}>Or</div>
          <Link
            style={{
              background: "#f25656",
              color: "white",
              textDecoration: "none",
              borderRadius: 6,
              padding: 5,
              textAlign: "center",
            }}
            to="/signup"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  if (state.Message === "Success") {
    toast.success("Logging in right away!...", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: false,
    });
  }
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MernSignIn);
