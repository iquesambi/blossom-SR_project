import React from 'react';
import { GestureMenuVC } from "./gesture_menu_view_controller";
import { ManualMenuVC } from './manual_menu_view_controller';
import { SequenceBuilderVC } from './sequence_builder_menu_view_controller';
import { CameraView } from './camera_view';
import { SvgImageSwitcher } from './touch';
import { BehaviourMenuVC } from './behaviour_menu_view_controller';

/**
 * An app for browsing and playing sequences.
 */
export class GestureApp extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      selectFaceDetection: 'none',
      selectTouchDetection: 'none',
      selectSequence: '',
    }
    this.handleFaceDetectionChange = this.handleFaceDetectionChange.bind(this);
    this.handleTouchChange = this.handleTouchChange.bind(this);
    this.handleSequenceChange = this.handleSequenceChange.bind(this);
    this.handleFaceDetection = this.handleFaceDetection.bind(this);
  }

  //HANDLERS for state management of Behavior Menu variables
  handleFaceDetectionChange(val) {
    this.setState({ selectFaceDetection: val});
  }

  handleTouchChange(val) {
    this.setState({ selectTouchDetection: val});
  }

  handleSequenceChange(val) {
    this.setState({ selectSequence: val});
  }

  //Handler for On Face Detection
  handleFaceDetection(){
    console.log("Face Detected!")
    if(this.state.selectFaceDetection == 'true')
      {
        console.log("PerformSeq");
        
        fetch(`/s/${this.state.selectSequence}`)
        .then((response) => { console.log(`${this.state.selectSequence} gesture fired`) });
        
      }
  }


  render() {
    return (
      <div className="gesture-app">
        <div className="container text-center col">
          <h1 className="text-center">Blossom Controls</h1>
          <div className = "row justify-content-center">
            <div>
              <h4>Gesture Menu</h4>
              <div className="blossom-controls mx-2">
                <GestureMenuVC />
              </div>
            </div>
          
            <div>
              <h4>Manual Menu</h4>
              <div className="blossom-controls mx-2">
                <ManualMenuVC />
              </div>
            </div>

            <div>
              <h4>Sequence Builder</h4>
              <SequenceBuilderVC />
            </div>
          </div>
          <div className = "row justify-content-center">
            <div class = "col">
              <CameraView onFaceDetection = {this.handleFaceDetection}/>
            </div>
            <div class = "col">
              <SvgImageSwitcher/> 
            </div>
          </div>
          <div className = "row justify-content-center">
            <div className = "blossom-controls mx-2">
              <h4>Behaviour Menu</h4>
              <BehaviourMenuVC 
              onFaceDetectionChange={this.handleFaceDetectionChange}
              onTouchChange={this.handleTouchChange}
              onSequenceChange={this.handleSequenceChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
