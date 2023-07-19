import React from 'react'
import image from './datence_all grad 1.png';
import logo from './User picture.png';
function Navbar () {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <img src={image} alt='imag'/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
       

        </li>
        <li className="nav-item">
          <a className="nav-link disabled"></a>
        </li>
      </ul>
      <form className="d-flex" role="search">
    {/* {<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>} */}
<img src={logo} alt='logo'/>
<label>Olivia</label>
        <button className="btn btn-warning" type="submit">Publish</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar;
