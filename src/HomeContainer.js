import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectList from './ProjectList';
import './HomeContainer.css';

class HomeContainer extends Component {
  render() {
    return (
      <div className="home-container">
        <span className="intro-title">
          Juan Areces is a developer and dog lover living in San Francisco
        </span>
      </div>
    );
  }
}

export default HomeContainer;

/** EXTRA TEXT ATM
 * I most recently worked as a software engineer intern at{' '}
          <a href="https://www.lipslut.com">Lipslut</a>. Before that, as a
          Product Manager at <a href="https://www.dialpad.com">Dialpad</a> for
          two years. I've also worked for think tanks and government
          contractors.
 */
