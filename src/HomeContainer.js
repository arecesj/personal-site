import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectList from './ProjectList';
import './HomeContainer.css';

class HomeContainer extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="intro-content">
          <span className="intro-title">
            Juan Areces is a developer, SOMETHING HERE, and dog lover living in
            San Francisco.{' '}
          </span>
        </div>
        <ProjectList />
      </div>
    );
  }
}

export default HomeContainer;
