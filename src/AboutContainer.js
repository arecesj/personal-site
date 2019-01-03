import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AboutContainer.css';
class AboutContainer extends Component {
  render() {
    return (
      <div className="about-container fade-in">
        {/* About Text */}
        <div className="about-wrapper">
          <div className="about-text">
            {/* About Text Title */}
            <div className="about-text-title">
              <h1>Hey There</h1>
            </div>
            {/* About Text Body */}
            <div className="about-text-body">
              <p>
                I am a software developer living in San Francisco that has a lot
                of love for problem solving in smart, beautiful, and efficient
                ways. Check out my{' '}
                <Link style={{ color: 'black' }} to="/projects">
                  current projects
                </Link>{' '}
                for things that interest me.
              </p>
            </div>
          </div>
          {/* About Contact */}
          <div className="about-contact">
            <div className="about-contact-title">
              <h1>Let's Chat</h1>
            </div>
            <div className="about-contact-body">
              <p>
                {' '}
                I enjoy receiving and responding to emails. If you want to chat,
                then so do I. Email me at{' '}
                <a style={{ color: 'black' }} href="mailto:jdareces@gmail.com">
                  jdareces@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutContainer;
