import React, { Component } from 'react';
import About from './About';
import Contact from './Contact';
class AboutContainer extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <About />
        <Contact />
      </div>
    );
  }
}

export default AboutContainer;
