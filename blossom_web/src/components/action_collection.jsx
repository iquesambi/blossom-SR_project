import React from 'react';
import PropTypes from 'prop-types';
import { ActionButton } from './action_button';

/**
 * A list of GestureButtons
 */
const actionData = () => ({
  pitch: 0,
  roll: 0,
  yaw: 0,
  height: 50,
  ears: 50,
  time: 1
})


export class ActionCollection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      actions: 0,
      actionButtons: []
    };
    this.actionButtonRefs = [];
    this.createRef = this.createRef.bind(this);
    this.getActions = this.getActions.bind(this);
  }

  componentWillMount() {
    
  }

  createRef() {
    let newRef = React.createRef();
    this.actionButtonRefs.push(newRef);
    return newRef;
  }

  getActions() {
    var actionsList = [];
    for (let i = 0; i < this.state.actions; i++) {
      actionsList.push(this.actionButtonRefs[i].current.actionMenuRef.current.state);
    } 
    return actionsList;
  }

  handleClick() {
    this.setState(prevState => ({
      actions: prevState.actions + 1, // Increment the number of actions
      actionButtons: [...prevState.actionButtons, <ActionButton key={prevState.actions+1} id = {prevState.actions+1} ref = {this.createRef()}/>]
    })); 
  } 

  render() {

    return (
      <div className="action-list">
        {this.state.actionButtons}
        <div className="row">
          <div className="col-xs-4">
            <input
              id={this.props.id}
              className="btn btn-primary"
              type="button"
              value="Add"
              onClick={this.handleClick.bind(this)} >
            </input>
          </div>
        </div>
     </div>

     
    );
  }
}
