import React, { Component, PropTypes } from 'react';

const Banner = (props) => {
  
  return (
    <div className="container">
      <div className="jumbotron banner">
        <h1>QLegance</h1><br/>
        <p>An open-source lightweight GraphQL client library for Javascript environments</p>
        <button type="button" className="btn btn-primary"><a download="QLegance&#46;js" href="https://s3-us-west-1.amazonaws.com/qlegance.com/qlegance.js">Download</a></button>

        <button type="button" className="btn btn-primary"><a href="#documentation">{props.scrollClick}Learn More</a></button> 
      </div>
    </div>
  );
}

export default Banner;