import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useGlobalContext } from "../context/Context";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const history = useHistory();
  const { userData, logout, gmail } = useGlobalContext();
  const login = () => history.push("/login");
  const register = () => history.push("/register");
  console.log("userData", userData);

  useEffect(() => {}, [userData]);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" className="text-decoration-none">
                <a class="nav-link">Poke-Mon List</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" className="text-decoration-none">
                <a class="nav-link">About</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          {userData != null ? (
            <div className="d-flex">
              <DropdownButton id="dropdown-basic-button" title={userData && gmail ? userData?.profileObj?.givenName : userData != null && gmail == false ? userData?.username : null} variant="none" className="border border-0">
                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
              </DropdownButton>
            </div>
          ) : (
            <div className="pl-5">
              <button className="btn btn-primary mx-2 align-middle" onClick={login}>
                Login
              </button>
              <button className="btn btn-primary mx-2" onClick={register}>
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
