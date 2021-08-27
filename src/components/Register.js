import React, { useState } from "react";
import { useGlobalContext } from "../context/Context";
import Loader from "../utils/Loader";
import { API } from "../utils/util";
function Register() {
  const { dispatch, err } = useGlobalContext();

  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState("http://localhost:8000/profile/account.png");

  const userData = { username, email, password, picture };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await API.post("/register", userData);
      console.log("isi data", data);
      console.log("isi data", data.message);
      setLoading(false);
      dispatch({
        type: "REGISTER",
        dataLogin: data,
      });
      localStorage.setItem("userData", JSON.stringify(data));
    } catch (err) {
      let message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
      setLoading(false);
      dispatch({
        type: "GET_ERROR",
        payload: message,
      });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center  flex-column mt-5">
      {loading && <Loader />}
      <form className="mt-5 p-4 border border-dark rounded-3">
        {err && <p className="text-danger text-center">{err}</p>}
        <div class="mb-3">
          <label for="exampleInputUsername" className="form-label">
            Username
          </label>
          <input type="username" name="username" className="form-control" id="exampleInputUsername" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input type="email" name="email" className="form-control" id="exampleInputEmail1" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="d-flex justify-content-center flex-column">
          <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
