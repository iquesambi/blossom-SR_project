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
      actions: 1,
      actionDatas: []
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
      this.state.actionDatas.push(new actionData()); 
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
