import React, {useState} from 'react';

/**
 * A panel that houses a collection of GestureButtons and provides filtering functionality over them
 */
export class BehaviourMenuVC extends React.Component {
  constructor(props) {
    super(props);
    this.handleFaceDetectionChange = this.handleFaceDetectionChange.bind(this);
    this.handleTouchChange = this.handleTouchChange.bind(this);
    this.handleSequenceChange = this.handleSequenceChange.bind(this);
  }

  handleFaceDetectionChange(event) {
    this.props.onFaceDetectionChange(event.target.value);
  }

  handleTouchChange(event) {
    this.props.onTouchChange(event.target.value);
  }

  handleSequenceChange(event) {
    this.props.onSequenceChange(event.target.value);
  }

  render() {
    return (
      <div class = "col">
        <h5> When... </h5>
        <div className = "col">
          <div className = "d-flex justify-content-between align-items-center">
            <span>
              On Face Detection
            </span>
            <select 
            id="select" 
            name="select" 
            style={{width:'80px', height: '40px', textIndent: '0px', margin: '0px', padding: '0px'}}
            onChange={this.handleFaceDetectionChange}>
              <option value="none">NONE</option>
              <option value="true">True</option>
            </select>
          </div>
          <div className = "d-flex justify-content-between align-items-center">
            <span>
              On Touch
            </span>
            <select 
            id="select" 
            name="select" 
            style={{width:'80px', height: '40px', textIndent: '0px', margin: '0px', padding: '0px'}}
            onChange={this.handleTouchChange}>
              <option value="none">NONE</option>
              <option value="base">Base</option>
              <option value="center">Center</option>
              <option value="left">Left</option>
              <option value="right">Right</option>
              <option value="head">Head</option>
            </select>
          </div>
        </div>

        <h5> Do...</h5>
        <div class = "d-flex justify-content-between align-items-center">
          <span>
            Sequence
          </span>
          <input
          type="text"
          style={{width:'150px', height:'40px', margin: '2px'}}
          placeholder="Type Sequence Name..."
          onChange={this.handleSequenceChange}/>
        </div>
      </div>
    );
  }
}
