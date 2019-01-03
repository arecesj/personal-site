import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AboutContainer.css';
import { FaArrowRight } from 'react-icons/fa';
import { Button } from 'reactstrap';

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
                I am a software developer living in San Francisco that enjoys
                problem solving in smart, beautiful, and efficient ways. Check
                out my{' '}
                <u>
                  <Link style={{ color: 'black' }} to="/projects">
                    portfolio
                  </Link>
                </u>{' '}
                for things that interest me or{' '}
                <u>
                  <a
                    style={{ color: 'black' }}
                    href="https://drive.google.com/file/d/1GyTxl_ZwzgAxoTCibJDsUic82CHL3xhy/view?usp=sharing"
                  >
                    my resume
                  </a>
                </u>{' '}
                for past experiences.
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
                <u>
                  <a
                    style={{ color: 'black' }}
                    href="mailto:jdareces@gmail.com"
                  >
                    jdareces@gmail.com
                  </a>
                </u>
                .
              </p>
            </div>
          </div>
          <Link style={{ animation: 'fadeIn ease 4s' }} to="/portfolio">
            <Button color="info">
              My portfolio <FaArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default AboutContainer;
