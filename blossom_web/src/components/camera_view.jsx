import React from 'react';
import PropTypes from 'prop-types';

export class CameraView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {}

    this.socket = new WebSocket('ws://192.168.230.108:8765');
    this.imageElement = document.getElementById('cameraImage');

    this.socket.onmessage = this.onMessage.bind(this);
    this.socket.onopen = this.onOpen.bind(this);
    this.socket.onerror = this.onError.bind(this);
    this.socket.onclose = this.onClose.bind(this);
  }

  onMessage(event) {
    console.log("Received message:", event.data);

    // Get the binary image data from the WebSocket message
    const arrayBuffer = event.data;
    const blob = new Blob([arrayBuffer], { type: 'image/jpeg' });

    console.log("Created Blob:", blob);

    const url = URL.createObjectURL(blob);
    imageElement.src = url;
  };

  onOpen() {
    console.log("Connected to WebSocket server.");
  };

  onError(error) {
    console.error("WebSocket error: ", error);
  };

  onClose() {
    console.log("WebSocket connection closed.");
  };

  render() {
    return (
      <div>
        <h1>Live Camera Stream</h1>
        <img id="cameraImage" 
          width="640" 
          height="480" 
          src="https://spectrum.ieee.org/media-library/blossom.jpg?id=25583846&width=1000&quality=85"
        />
      </div>
    )
  }
}

CameraView.propTypes = {}
