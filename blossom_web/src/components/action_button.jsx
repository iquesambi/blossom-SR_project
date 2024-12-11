import React from 'react';
import PropTypes from 'prop-types';
import { ActionMenu } from './action_menu';

/**
 * A button that toggles collapsible content.
 */
export class ActionButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false, // Tracks whether the content is expanded or collapsed
      menu: {
        pitch: 0,
        roll: 0,
        yaw: 0,
        height: 50,
        ears: 50,
        time: 1,
      }
    };
    this.actionMenuRef = React.createRef();
    this.handleToggle = this.handleToggle.bind(this);
    this.getMenuState = this.getMenuState.bind(this);
  }

  getMenuState() {
    return this.state.isExpanded ? this.actionMenuRef.current.state : this.state.menu;
  }

  handleToggle() {
    this.setState((prevState) => ({ isExpanded: !prevState.isExpanded, menu: this.getMenuState() }));
  }

  render() {
    return (
      <div id={this.props.id} className="row mx-4">
        <div className="col-xs-4">
          <input
            id={this.props.id}
            className="btn btn-primary w-100"
            type="button"
            value={'Action ' + this.props.id}
            onClick={this.handleToggle}
          />
        </div>
        {this.state.isExpanded && (
          <ActionMenu ref={this.actionMenuRef} positionState={this.state.menu}/>
        )}
      </div>
    );
  }
}

ActionButton.propTypes = {
  id: PropTypes.number.isRequired,
};
