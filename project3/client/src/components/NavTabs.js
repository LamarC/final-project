import React from "react";
import { Link } from "react-router-dom";
// import "./Navtabs.css";

function NavTabs() {
  return (
    <ul className="nav nav-tabs navbar-dark bg-dark">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Welcome
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Articles"
          className={window.location.pathname === "/Articles" ? "nav-link active" : "nav-link"}
        >
          Articles
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/NasaLive"
          className={window.location.pathname === "/NasaLive" ? "nav-link active" : "nav-link"}
        >
          Nasa Live
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/NasaImages"
          className={window.location.pathname === "/NasaImages" ? "nav-link active" : "nav-link"}
        >
          Nasa Library
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Apod"
          className={window.location.pathname === "/Apod" ? "nav-link active" : "nav-link"}
        >
          APOD
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;