import React, { useState } from "react";
import img from "../images/Images1.png";

function Login() {
  const [login, setLogin] = useState({
    phone: "",
    password: "",
  });

  const loginData = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    console.log(login);
  };

  const submitData = (e) => {};

  return (
    <div className="container">
      <div className="row">
        <div className="col mt-2 pt-5 ">
          <h2 style={{ color: "#575700", textShadow: "0 0 1px #FF0000" }}>
            Login to VMall Tenant Account
          </h2>
          <h5
            className="mb-4 mt-5"
            style={{ color: "purple", textDecoration: "underline" }}
          >
            Log in
          </h5>
          <form>
            <div className="mb-4">
              <input
                type="number"
                id="phone"
                className="form-control"
                name="phone"
                name="phone"
                onChange={loginData}
                placeholder="Enter Phone Number"
                maxlength={10}
                required
                style={{ backgroundColor: "whitesmoke" }}
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                className="form-control"
                minlength="8"
                required
                name="password"
                onChange={loginData}
                placeholder="Enter Password"
                style={{ backgroundColor: "whitesmoke" }}
              />
            </div>
            <div
              className="d-grid gap-2 mt-4"
              style={{ boxShadow: "5px 5px px grey" }}
            >
              <button
                className="btn btn-primary"
                type="submit"
                onSubmit={(e) => {
                  submitData(e);
                }}
                style={{ boxShadow: "5px 5px 5px grey" }}
              >
                Log in
              </button>
            </div>

            <hr
              className="mb-4"
              style={{ borderBottom: "3px solid black" }}
            ></hr>

            <div className="d-grid gap-2 mt-4">
              <button
                className="btn btn-success"
                type="button"
                style={{ boxShadow: "5px 5px 5px grey" }}
              >
                Login Via Google
              </button>
            </div>
            <div className="d-grid gap-2 mt-4 ">
              <button
                className="btn btn-info"
                type="button"
                style={{ boxShadow: "5px 5px 5px grey", color: "white" }}
              >
                Login Via Facebook
              </button>
            </div>
          </form>
        </div>

        <div className="col mt-4 bg-light">
          <img
            src={img}
            alt="Banner"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
