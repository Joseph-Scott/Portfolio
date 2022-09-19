import React from 'react';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Tenth navbar example">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./Home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./Skills">Skills</a>
            </li>
           <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./Project">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;