import React from 'react';
import { ActionCollection } from './action_collection';

/**
 * A panel that houses the sequence building functionality
 */

//TODO: also need to add a button to refresh the sequence list
export class ActionBuilderVC extends React.Component {

  render() {
    return (
      <div>
        <ActionCollection />
      </div>
    );
  }
}
