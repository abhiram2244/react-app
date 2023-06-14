import React from "react";
import PropTypes from "prop-types";
export default function Nav(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${
          props.mode /* === "dark" ? props.mode : props.newmode */
        } bg-${props.mode /* === "white" ? props.mode : props.newmode */}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.aboutText}
                </a>
              </li>
            </ul>
            {/*   <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                id="search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark
              </label>
            </div>
            {/*new alert  */}
            {/* <div
              className={`form-check form-switch text-${
                props.newmode === "light" ? "green" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.newtoggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable green
              </label>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

Nav.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Nav.defaultProps = {
  title: "enter title here",
  aboutText: "enter about text here",
};
