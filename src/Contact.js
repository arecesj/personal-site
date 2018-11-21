import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>Contact</h3>
        <p>
          {' '}
          I enjoy receiving and responding to emails. If you want to chat, then
          so do I. Email me at{' '}
          <a href="mailto:jdareces@gmail.com">jdareces@gmail.com</a>.
        </p>
      </React.Fragment>
    );
  }
}

export default Contact;
