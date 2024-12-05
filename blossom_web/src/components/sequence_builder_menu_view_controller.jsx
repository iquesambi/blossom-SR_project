import React from 'react';
import { SequenceBuilderButton } from './sequence_builder_button';

/**
 * A panel that houses the sequence building functionality
 */

//TODO: also need to add a button to refresh the sequence list
export class SequenceBuilderVC extends React.Component {

  render() {
    return (
      <div>
        <SequenceBuilderButton />
      </div>
    );
  }
}
