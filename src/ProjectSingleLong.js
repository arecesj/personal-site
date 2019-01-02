import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

class ProjectSingleLong extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // <div>
      //   <Card inverse>
      //     <CardImg width="100%" src="https://i.ibb.co/P6Dd1fd/cherries-logo.png" alt="Cherries" />
      //     <CardImgOverlay>
      //       <CardTitle>Cherries</CardTitle>
      //       <CardText>
      //         A StitchFix inspired something something reeeeeeeee
      //       </CardText>
      //     </CardImgOverlay>
      //   </Card>
      // </div>
      <div
        style={{
          backgroundColor: `${this.props.color}`,
          height: '20rem',
          alignItems: 'center'
        }}
      >
        {' '}
        <img
          src="https://i.ibb.co/P6Dd1fd/cherries-logo.png"
          alt="Cherries"
          style={{ height: '75%' }}
        />
      </div>
    );
  }
}

export default ProjectSingleLong;
