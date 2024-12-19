import React from 'react';
import * as faceapi from 'face-api.js';

export class CameraView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modelLoaded: false,
      faceDetected: true,
    };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // Load face-api.js models
    const loadModels = async () => {
      await faceapi.nets.ssdMobilenetv1.loadFromUri('/models'); // Path to the models
      this.setState({ modelLoaded: true });

      // Make sure the image is loaded before starting detection
      this.startFaceDetection();
    };

    loadModels();
  }

  startFaceDetection() {
    // Ensure imageRef is available and image is fully loaded
    const imageElement = this.imageRef.current;

    if (imageElement) {
      // Set up the interval for face detection every 0.5 seconds (500ms)
      this.faceDetectionInterval = setInterval(() => {
        this.detectFaces(imageElement);
      }, 500);
    } else {
      console.error("Image reference is not available");
    }
  }

  stopFaceDetection() {
    // Clear the interval when needed
    clearInterval(this.faceDetectionInterval);
  }

  async detectFaces(imageElement) {
    // Check if imageRef is available and the image is loaded
    if (imageElement && imageElement.complete && imageElement.naturalWidth !== 0) {
      try {
        const detections = await faceapi.detectAllFaces(imageElement);
        this.setState({ faceDetected: detections.length !== 0 });
        //console.log(detections); // Log or handle the detections here
      } catch (error) {
        console.error("Face detection error:", error);
      }
    } else {
      console.log("Image not yet loaded or not available");
    }
  }

  componentWillUnmount() {
    // Stop face detection when the component unmounts
    this.stopFaceDetection();
  }

  render() {
    return (
      <div>
        <h4>Camera Stream</h4>
        {this.state.modelLoaded ? (
          <div>
            <img
            ref={this.imageRef}
            width="640"
            src="http://192.168.161.184/stream" // Replace with your stream URL
            alt="Video Stream"
            crossOrigin="anonymous"
            />
            <h4> Face Detected: {this.state.faceDetected.toString()} </h4>
          </div>
        ) : (
          <p>Loading face detection models...</p>
        )}
      </div>
    );
  }
}

CameraView.propTypes = {};
