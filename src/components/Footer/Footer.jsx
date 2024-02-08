import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="container-fluid">
      <div className="row  justify-content-center align-items-center text-white ">
        <div className="col-sm-6 col-md-3 text-center my-2">
          <div className="lead">© 2024 Rail-Lanka. All rights reserved.</div>
        </div>
        <div className="col-sm-6 col-md-3 text-center my-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light me-3"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light me-3"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light me-3"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="col-sm-6 col-md-3 text-center my-2">
          <div className="lead">Got a Question ?</div>
          <a className="btn btn-success  btn-lg mt-2">Contat Now</a>
        </div>
        <div className="col-sm-6 col-md-3 text-center my-2">
          <div className="lead my-2">Top Links</div>
          <a href="" className="d-block  footer-link">
            Home
          </a>
          <a href="" className="d-block  footer-link">
            Contact
          </a>
          <a href="" className="d-block  footer-link">
            QR Scan
          </a>
          <a href="" className="d-block  footer-link">
            My Account
          </a>
          <a href="" className="d-block  footer-link">
            Train Schedules
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
