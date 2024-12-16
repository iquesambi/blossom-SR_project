import React from 'react';
import { SequenceBuilderButton } from './sequence_builder_button';
import { ActionCollection } from './action_collection';
import runSrc from './run.png'
import saveSrc from './save.png'
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
        <div className ="blossom-controls mx-2 seqBuilder">
          <ActionCollection ref={this.actionCollectionRef}/>
        </div>
        <div className = "seqBtns mx-2 px-2  d-flex justify-content-between align-items-center">
          <SequenceBuilderButton
            getActions={this.getActions} 
            name={this.state.sequenceName}
            save={false}
            iconSrc = {runSrc}
          />
          <input
            type="text"
            value={this.state.sequenceName}
            onChange={this.handleNameChange}
            style={{width:'150px', height:'40px', margin: '2px'}}
          />
          <SequenceBuilderButton
            getActions={this.getActions} 
            name={this.state.sequenceName}
            save={true}
            iconSrc = {saveSrc}
          />
        </div>
      </div>
    );
  }
}
