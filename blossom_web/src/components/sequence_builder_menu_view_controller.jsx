import React from 'react';
import { SequenceBuilderButton } from './sequence_builder_button';

/**
 * A panel that houses the sequence building functionality
 */

//TODO: also need to add a button to refresh the sequence list
export class SequenceBuilderVC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sequenceName: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ sequenceName: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.sequenceName}
          onChange={this.handleNameChange}
        />
        <SequenceBuilderButton 
          name={this.state.sequenceName}
        />
      </div>
    );
  }
}
