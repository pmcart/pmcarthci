import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Search from './components/Search';
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';
import './assets/css/material-dashboard.css?v=3.1.0';

function App() {
  return (
    <Router>

    <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark" id="sidenav-main">
      <div className="sidenav-header">
        <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
        <a className="navbar-brand m-0" href="https://demos.creative-tim.com/material-dashboard/pages/dashboard" target="_blank" rel="noopener noreferrer">
        
          <span className="ms-1 font-weight-bold text-white">HCI</span>
        </a>
      </div>
      <hr className="horizontal light mt-0 mb-2" />
      <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
        <ul className="navbar-nav">
       
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link text-white active bg-gradient-primary" : "nav-link text-white"}>
            <span className="nav-link-text ms-1">Home</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/search" className={({ isActive }) => isActive ? "nav-link text-white active bg-gradient-primary" : "nav-link text-white"}>
            <span className="nav-link-text ms-1">Search Patient Visits</span>
          </NavLink>
        </li>
        </ul>
      </div>
     
    </aside>
    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
  
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/search" element={<Search />} />
      </Routes>

    </main>

  </Router>
  );
}

export default App;
