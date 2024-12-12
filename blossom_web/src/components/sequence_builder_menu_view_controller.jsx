import React from 'react';
import { SequenceBuilderButton } from './sequence_builder_button';
import { ActionCollection } from './action_collection';

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
    this.actionCollectionRef = React.createRef();

    this.handleNameChange = this.handleNameChange.bind(this);
    this.getActions = this.getActions.bind(this);
  }

  handleNameChange(event) {
    this.setState({ sequenceName: event.target.value });
  }
  
  getActions() {
    return this.actionCollectionRef.current.getActions();
  }

  render() {
    return (
      <div>
        <ActionCollection ref={this.actionCollectionRef}/>
        <div className="row">
          <SequenceBuilderButton
            getActions={this.getActions} 
            name={this.state.sequenceName}
            save={false}
            text={'Run sequence'}
          />
        </div>
        <div className="row">
          <input
            type="text"
            value={this.state.sequenceName}
            onChange={this.handleNameChange}
            style={{width:'45%', margin: '2px'}}
          />
          <SequenceBuilderButton
            getActions={this.getActions} 
            name={this.state.sequenceName}
            save={true}
            text={'Save sequence as'}
          />
        </div>
      </div>
    );
  }
}
