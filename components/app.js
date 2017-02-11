import React, { Component, PropTypes } from 'react';
import smoothScroll from 'smoothscroll';
import Nav from './Nav.js';
import Banner from './Banner.js';
import SectionOne from './SectionOne.js';
import SectionTwo from './SectionTwo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleScrollClick = this.handleScrollClick.bind(this);
  }

  handleScrollClick(event) {
    const scrollId = this.props.data.href;
    const scrollElement = document.querySelector(scrollId);
    smoothScroll(scrollElement);

    event.preventDefault();
  }
  

  
  render() {
    return (
      <div>
        <Nav scrollClick={this.handleScrollClick} />
        <Banner scrollClick={this.handleScrollClick}/>
        <SectionOne />
        <SectionTwo />
      </div>
    )
  }
}



export default App;