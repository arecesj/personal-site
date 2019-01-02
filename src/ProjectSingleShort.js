import React, { Component } from 'react';

class ProjectSingleShort extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: `${this.props.color}`,
          height: '20rem',
          width: '50%'
        }}
      >
        {' '}
        Short project, thug
      </div>
    );
  }
}

export default ProjectSingleShort;
