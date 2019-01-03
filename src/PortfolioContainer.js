import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PortfolioContainer.css';
import { FaArrowRight } from 'react-icons/fa';
import { Button } from 'reactstrap';

class PortfolioContainer extends Component {
  render() {
    return (
      <div className="portfolio-container fade-in">
        <div className="portfolio-title">
          <h1>PORTFOLIO</h1>
        </div>
        <div className="portfolio-content">
          <div className="portfolio-content-div">
            <div className="cherries-div">
              <div className="portfolio-content-title">
                <h2>Cherries</h2>
              </div>
              <div className="portfolio-body">
                <p>
                  {' '}
                  Created a StitchFix inspired e-commerce site for jewlery
                  subscriptions. Used React, JavaScript, Gratsby.js, GraphQL,
                  and Jest. <br />
                  <u>
                    <a
                      style={{ color: 'black' }}
                      href="https://github.com/NEsfandiari/cherries"
                    >
                      Learn more here
                    </a>
                  </u>
                  .
                </p>
              </div>
            </div>
            <div className="visijam-div">
              <div className="portfolio-content-title">
                <h2>VisiJAM</h2>
              </div>
              <div className="portfolio-body">
                <p>
                  {' '}
                  Built a JAMStack survey tool that placed in the top 6 at
                  JAMStack 2018. Used Formspree, React, and Gatsby.js. <br />
                  <u>
                    <a
                      style={{ color: 'black' }}
                      href="https://github.com/zeuslawyer/visiJAM"
                    >
                      Learn more here
                    </a>
                  </u>
                  .
                </p>
              </div>
            </div>

            <div className="rithm-div">
              <div className="portfolio-content-title">
                <h2>Rithm School</h2>
              </div>
              <div className="portfolio-body">
                <p>
                  {' '}
                  Developed over 30 projects using React, Node / Express,
                  Python, jQuery, Bootstrap, and Flask. <br />
                  <u>
                    <a
                      style={{ color: 'black' }}
                      href="https://github.com/arecesj"
                    >
                      Learn more here
                    </a>
                  </u>
                  .
                </p>
              </div>
            </div>
          </div>

          <a
            style={{ textAlign: 'center', marginLeft: '1rem' }}
            href="https://github.com/arecesj"
          >
            <Button color="info">
              GitHub <FaArrowRight />
            </Button>
          </a>
        </div>
      </div>
    );
  }
}

export default PortfolioContainer;

// TODO: Dynamically load projects from GH - research github api
// TODO: do this all dynamic at one point?
