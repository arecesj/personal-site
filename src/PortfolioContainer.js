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
          <h1>Portfolio</h1>
        </div>
        <div className="portfolio-content">
          <div className="portfolio-content-div">
            <div className="content-row1">
              <div className="portfolio-title">
                <h2>Cherries</h2>
              </div>
              <div className="portfolio-body">
                <p>
                  {' '}
                  A StitchFix like clone. <br />
                  <u>
                    <a style={{ color: 'black' }} href="https://google.com">
                      Learn more here
                    </a>
                  </u>
                  .
                </p>
              </div>
              <div className="portfolio-title">
                <h2>Rithm School</h2>
              </div>
              <div className="portfolio-body">
                <p>
                  {' '}
                  A StitchFix like clone. <br />
                  <u>
                    <a style={{ color: 'black' }} href="https://google.com">
                      Learn more here
                    </a>
                  </u>
                  .
                </p>
              </div>
            </div>
            <div className="content-row2">
              <div className="portfolio-title">
                <h2>VisiJAM</h2>
              </div>
              <div className="portfolio-body">
                <p>
                  {' '}
                  A StitchFix like clone. <br />
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
              <div className="portfolio-title">
                <h2>Dialpad</h2>
              </div>
              <div className="portfolio-body">
                <p>
                  {' '}
                  A StitchFix like clone. <br />
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
          </div>
          <br />
          <a style={{ textAlign: 'center' }} href="https://github.com/arecesj">
            <Button color="info">
              My GitHub <FaArrowRight />
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
