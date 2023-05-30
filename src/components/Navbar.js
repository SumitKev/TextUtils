import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  // let navClasses = "navbar navbar-expand-lg bg-body-tertiary";
  // let text = "light";
  // if (props.mode === true) {
  //   console.log("Dark mode enabling");
  //   navClasses += " navbar-dark bg-dark";
  //   text = "dark";
  // }
  // function toggleStyle() {
  //   props.setMode(!props.mode);
  //   console.log(props.mode);
  //   console.log("Dark mode enabled");
  // }
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary navbar-${
          props.mode === true ? "dark" : "light"
        } bg-${props.mode === true ? "dark" : "light"}`}
        data-bs-theme={props.mode === true ? "dark" : "light"}
      >
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">
            {props.title}
          </Link> */}
          <a className="navbar-brand" href="#">{props.title}</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link> */}
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link> */}
                <a className="nav-link" href="#">{props.aboutText}</a>
              </li>
            </ul>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input mx-3"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
