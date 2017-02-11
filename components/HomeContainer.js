import React, { Component, PropTypes } from 'react';
import HomeView from './HomeView.js';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ui: {
        jumbo: 'QLegance',
        detail: 'An open-source lightweight GraphQL client library for Javascript environments',
        button: 'Learn more'
      },
      route: '/start'
    }
  }
  render() {
    return (
      <div>
        <h1>Home Container Yo</h1>
        <HomeView ui={this.state.ui} />
      </div>
    )
  }
}



export default HomeContainer;