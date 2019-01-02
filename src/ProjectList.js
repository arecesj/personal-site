import React, { Component } from 'react';
import ProjectSingleLong from './ProjectSingleLong';
import ProjectSingleShort from './ProjectSingleShort';

class ProjectList extends Component {
  render() {
    // TODO: Dynamically load projects from GH - research github api
    // TODO: do this all dynamic at one point?
    return (
      <div style={{ width: '100%' }}>
        <ProjectSingleLong color={'pink'} />
        <div
          className="short-projects"
          style={{ display: 'flex', flexDirection: 'row' }}
        >
          <ProjectSingleShort color={'papayawhip'} />{' '}
          <ProjectSingleShort color={'green'} />{' '}
        </div>
        <ProjectSingleLong color={'pink'} />
      </div>
    );
  }
}

export default ProjectList;
