import React from 'react';
import PropTypes from 'prop-types';

export class CameraView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <h4>Live Camera Stream</h4>
        <img id="cameraImage" 
          width="640" 
          src="http://192.168.230.184/stream"
          alt="Video Stream"
        />
      </div>
    )
  }
}

CameraView.propTypes = {}
