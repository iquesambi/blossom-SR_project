import React from 'react';
import PropTypes from 'prop-types';
import { ActionButton } from './action_button';

/**
 * A list of GestureButtons
 */
export class ActionCollection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      actions: 1,
    };
  }

  componentWillMount() {
    
  }

  handleClick() {
    this.setState(prevState => ({
      actions: prevState.actions + 1, // Increment the number of actions
    })); 
    console.log("Action added!"); 
  } 

  render() {

    const actionButtons = [];
    for (let i = 0; i < this.state.actions; i++) {
      actionButtons.push(<ActionButton key={i} id = {i}/>);
    }

    return (
      <div className="action-list">
        {actionButtons}
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
