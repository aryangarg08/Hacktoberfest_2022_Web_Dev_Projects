import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(data) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${data.mode} bg-${data.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{data.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/greet">Greet</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/message">Message</Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${data.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={data.toggleMode} type="checkbox" role="switch" aria-checked="mixed" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
        </div>
      </div>
    </nav>
  )
};

Navbar.propTypes={
    title:PropTypes.string.isRequired
};