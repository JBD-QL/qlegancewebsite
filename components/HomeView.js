import React, { Component, PropTypes } from 'react';

const HomeView = (props) => {
  
  return (
    <div className="page container">
      <div className="row">
        <div className="col-md-offset-2 col-md-8 content">
          <div className="jumbo">
            <p>{props.ui.jumbo}</p>
          </div>
          <p className="detail">{props.ui.detail}</p>
          <div className="btn btn-info btn-lg" onClick={props.handler}>{props.ui.button}</div>
        </div>
      </div>
    </div>
  );
}

export default HomeView;
