import React, { Component, PropTypes } from 'react';

const Nav = (props) => {

  return (
    <nav className="navbar navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span> 
          </button>
          <a className="navbar-brand" href="#">QLegance</a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#aboutUs">{props.scrollClick}About Us</a></li>
            <li><a href="https://github.com/JBD-QL/QLegance/wiki/QLegance-API" target="_blank">Documentation</a></li>
            <li><a href="https://github.com/JBD-QL/QLegance" target="_blank">Github</a></li>
          </ul>
        </div>
      </div>
      
    </nav>
  );
}

export default Nav;