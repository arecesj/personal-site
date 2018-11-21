import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectList from './ProjectList';

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <section className="intro-content">
          <p className="intro-paragraph">
            {' '}
            Hey! I'm Juan Areces, a software engineer based out of SF. On this
            site, you can see what projects I'm currently working on.{' '}
            <Link to="/about">More about me here.</Link>
          </p>
        </section>
        <section className="intro-projects">
          <h2>Projects</h2>
          <ProjectList />
        </section>
      </div>
    );
  }
}

export default HomeContainer;
