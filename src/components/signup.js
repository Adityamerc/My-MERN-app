import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MernSignUp() {
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 15) {
      errors.name = "Must be 15 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (values.email.length < 5) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 5) {
      errors.email = "Must be > 5";
    }

    if (!values.confirmpassword) {
      errors.confirmpassword = "Required";
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = "Passwords are not the same";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmpassword: "",
    },
    validate,
    onSubmit: (values) => {
      const sendValues = {
        email: values.email,
        name: values.name,
        password: values.password,
        confirmPwd: values.confirmpassword,
      };
      submitDetails(sendValues);
    },
  });

  const submitDetails = async (details) => {
    await axios
      .post("http://localhost:5000/addName/adduser", details)
      .then((res) =>
        toast.success("User created!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: false,
        })
      )
      .catch((err) => {});
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ToastContainer />
      <form onSubmit={formik.handleSubmit}>
        <h3>Sign Up</h3>

        <label style={{ fontWeight: "bold", marginTop: 15 }}>Name</label>

        <div>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="The Rock"
            style={
              formik.touched.name && formik.errors.name
                ? { border: "2px solid red", borderRadius: 5, padding: 7 }
                : { borderRadius: 5, border: "2px solid white", padding: 7 }
            }
          />
        </div>

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
        </div>

        <label style={{ fontWeight: "bold", marginTop: 15 }}>
          Confirm Password
        </label>

        <div>
          <input
            type="password"
            name="confirmpassword"
            value={formik.values.confirmpassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="***************"
            style={
              formik.touched.confirmpassword && formik.errors.confirmpassword
                ? { border: "2px solid red", borderRadius: 5, padding: 7 }
                : { borderRadius: 5, border: "2px solid white", padding: 7 }
            }
          />
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
            Create User
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
            to="/signin"
          >
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
}
