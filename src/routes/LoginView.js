import "./LoginView.css";
import logo from "../assets/g329.png";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Swal from "sweetalert2";

import { encryptData, decryptData, encryptString } from "../Global/crypto";

function LoginView() {
  const [studnum, setStudnum] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/menu");
    }
  });

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/auth/login", {
        m: encryptData({
          student_number: studnum,
          student_password: password,
        }),
      })
      .then((res) => {
        let info = decryptData(res.data.m);
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: info.status.remarks,
            text: info.status.message,
          });
          localStorage.setItem("token", encryptData(info.payload.token));
          localStorage.setItem("student_number", encryptString(info.payload.student_number));
          localStorage.setItem("student_name", encryptString(info.payload.student_name));
          navigate("/menu");
        } else {
          Swal.fire({
            icon: "error",
            title: info.status.remarks,
            text: info.status.message,
          });
        }
      })
      .catch((err) => {
        // let info = decryptData(err.data.m);
        console.log(err);
        // Swal.fire({
        //   icon: "error",
        //   title: info.status.remarks,
        //   text: info.status.message,
        // });
      });
  };

  const handleStudnumChange = (e) => {
    setStudnum(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div
            id="login"
            className="d-flex align-items-center justify-content-center"
          >
            <div className="p-4">
              <div className="row">
                <img src={logo} className="img-fluid" alt="iCheck Logo" />
              </div>
              <div className="row mt-5">
                <h3 className="text-center login-text">Log In</h3>
              </div>
              <form onSubmit={submitForm}>
                <div className="row mt-2">
                  <div className="mb-3">
                    <label htmlFor="studnum" className="form-label ">
                      Student Number
                    </label>
                    <input
                      type="number"
                      className="form-control form-control-lg"
                      id="studnum"
                      placeholder="20xxxxxxx"
                      value={studnum}
                      onChange={handleStudnumChange}
                      required
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label ">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>
                </div>
                <div className="row mt-2 p-3">
                  <button className="btn submit" type="submit">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
}

export default LoginView;
