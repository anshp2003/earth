import React from 'react'
import { Outlet, Link }  from 'react-router-dom'

const Layout = () => {
    return (
    <>
    <div className=' col-md-12'>
    <nav className="navbar navbar-expand-sm fixed-top bg-light ">
  <div className="container-fluid px-md-5">
    <Link className="navbar-brand  ms-md-5 px-md-5 col-6 " to="/"><img src="img/EARTH-STORE.png" alt="" className='col-md-6 col-12' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav ms-auto fs-5 pe-5 ">
        <li className="nav-item">
          <Link className="nav-link me-4" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link me-4" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link me-4" to="/Shop">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link me-4" to="/Contact">Contact</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link me-4" to="/">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>

          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link me-5" to="/">
          <i class="fa fa-user" aria-hidden="true"></i>

          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

<Outlet />
    </>
)
};

export default Layout;
