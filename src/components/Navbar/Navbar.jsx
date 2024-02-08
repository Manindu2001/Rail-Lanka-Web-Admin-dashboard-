import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-md">
      <div class="container-lg">
        <a class="navbar-brand text-light fw-bold " href="/home">
          RailLanka
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end "
          id="navbarNav"
        >
          <ul class="navbar-nav ">
            <li class="nav-item">
              <a class="nav-link nav-link-style text-light" href="/home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-style text-light" href="/Schedules">
                Train Schedules
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-style text-light" href="/smartQR">
                QR Ticket
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link nav-link-style text-light text-light"
                href="/contact"
              >
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link nav-link-style text-light text-light d-md-none fw-bold mt-2"
                href="/profile"
              >
                My Account
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link nav-link-style text-light text-light d-md-none  fw-bold mt-2"
                href="/"
              >
                Log Out
              </a>
            </li>
          </ul>
          <div>
            <a
              className="btn btn-primary d-none d-md-inline ms-4 ps-2 pe-2 text-light"
              href="/profile"
            >
              Station Details
            </a>
          </div>
          <div>
            <a
              className="btn btn-danger  d-none d-md-inline ms-4 ps-2 pe-2 text-light"
              href="/"
            >
              Log Out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
