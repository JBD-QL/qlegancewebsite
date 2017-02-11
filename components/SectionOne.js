import React, { Component, PropTypes } from 'react';

const SectionOne = (props) => {
  
  return (
    <div className="sectionOne" id="aboutUs">
      <div className="row row-centered sectionOneContent">
        <div className="panel panel-default">
          <div className="panel-body">
            <h2>Simplify the way you fetch your data</h2>
            <p>QLegance provides a pattern to manage GraphQL queries in all Javascript environments.</p>
          {/*<img src={'./../component.png'} />*/}
          </div>
        </div>
        <div className="col-sm-4 col-centered feature">
          <h2>Independent</h2>
          <p>QLegance forms wrappers around your HTMl elements allowing them to use unique methods to query. Becaue of this, QLegance isn't tied down to any specific framework and is flexible to all.</p>
        </div>
        <div className="col-sm-4 col-centered feature">
          <h2>Intuitive</h2>
          <p>Your project already has a GraphQL API and your responses are pretty well defined. QLegance brings your GraphQL field methods to the front-end and builds the queries you will need to make.</p>
        </div>
        <div className="col-sm-4 col-centered feature">
          <h2>Elements Define</h2>
          <p>When your elements need data they should say so. QLegance gives your elements a voice. QLegant elements become components that define the data they need. </p>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;