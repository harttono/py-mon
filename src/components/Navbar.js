import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <Link to="/" className="text-decoration-none">
          <a class="navbar-brand">Poke-Mon List</a>
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/about" className="text-decoration-none">
                <a class="nav-link">About</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
