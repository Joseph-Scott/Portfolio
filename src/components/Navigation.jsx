import React from 'react';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/Home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navigation;