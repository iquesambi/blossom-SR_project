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
      ears: 50,
    };

    this.handleSlider= this.handleSlider.bind(this);
  }

  handleSlider(slider) {
    return (e, value) => { this.setState({ [slider]: value })};
  };

  render() {
    return (
      <div>
        <h5>Ears</h5>
        <Slider 
          value={this.state['ears']} 
          onChange={this.handleSlider('ears')}
          valueLabelDisplay="auto"
          min={0} 
          max={100}
        />
        <ManualButton />
      </div>
    );
  }
}
