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
    };
    this.actionMenuRef = React.createRef();
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState((prevState) => ({ isExpanded: !prevState.isExpanded }));
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
          <ActionMenu ref={this.actionMenuRef}/>
        )}
      </div>
    );
  }
}

ActionButton.propTypes = {
  id: PropTypes.number.isRequired,
};
