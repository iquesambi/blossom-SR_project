import React, {useState} from 'react';
import Slider from '@material-ui/core/Slider';
import { ManualButton } from './manual_button';

/**
 * A panel that houses a collection of GestureButtons and provides filtering functionality over them
 */
export class ManualMenuVC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pitch: 0,
      roll: 0,
      yaw: 0,
      height: 50,
      ears: 50,
    };

    this.handleSlider= this.handleSlider.bind(this);
  }

  handleSlider(slider) {
    return (e, value) => { this.setState({ [slider]: value })};
  };

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h5> Pitch</h5>
        <Slider 
          value={this.state['pitch']} 
          onChange={this.handleSlider('pitch')}
          valueLabelDisplay="auto"
          min={-3.14} 
          max={3.14}
          step={0.01}
          style={{ width: '75%' }}
        />
        <h5>Roll</h5>
        <Slider 
          value={this.state['roll']} 
          onChange={this.handleSlider('roll')}
          valueLabelDisplay="auto"
          min={-3.14} 
          max={3.14}
          step={0.01}
          style={{ width: '75%' }}
        />
        <h5>Yaw</h5>
        <Slider 
          value={this.state['yaw']} 
          onChange={this.handleSlider('yaw')}
          valueLabelDisplay="auto"
          min={-3.14} 
          max={3.14}
          step={0.01}
          style={{ width: '75%' }}
        />
        <h5>Height</h5>
        <Slider 
          value={this.state['height']} 
          onChange={this.handleSlider('height')}
          valueLabelDisplay="auto"
          min={0} 
          max={100}
          style={{ width: '75%' }}
        />
        <h5>Ears</h5>
        <Slider 
          value={this.state['ears']} 
          onChange={this.handleSlider('ears')}
          valueLabelDisplay="auto"
          min={0} 
          max={100}
          style={{ width: '75%' }}
        />
        <ManualButton 
          pitch={this.state.pitch}
          roll={this.state.roll}
          yaw={this.state.yaw}
          height={this.state.height}
          ears={this.state.ears}
        />
      </div>
    );
  }
}
