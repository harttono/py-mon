import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { useGlobalContext } from "../context/Context";
import Loader from "../utils/Loader";
import { API } from "../utils/util";
function Login() {
  const { loginWithGmail, dispatch, err } = useGlobalContext();
  const responseGoogle = (data) => loginWithGmail(data);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userData = { email, password };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await API.post("/login", userData);
      console.log("isi data", data);
      setLoading(false);
      dispatch({
        type: "LOGIN",
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
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="d-flex justify-content-center flex-column">
          <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary">
            Submit
          </button>
          <div>
            <p>login with gmail?</p>
            <GoogleLogin
              clientId="1042818573574-1dmsm5cvoh6u04hs1qm039m41le15un2.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              className="w-100 text-center mx-auto"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
