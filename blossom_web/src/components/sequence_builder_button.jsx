import React, { useSyncExternalStore } from 'react';
import PropTypes from 'prop-types';

/**
 * A button that builds and saves a new sequence
 */
export class SequenceBuilderButton extends React.PureComponent {
  handleClick() {
    fetch(`/add_sequence`, {
      method: 'POST',
      body: JSON.stringify({
      name: this.props.name,
      actions: this.props.getActions()
     }),
    })
    .catch(() => {});
    console.log(this.props.name);
    console.log(this.props.getActions());
  }

  render() {
    return (
      <div id = {this.props.name} className="row">
        <div className="col-xs-4">
          <input
            id={this.props.name}
            className="btn btn-primary"
            type="button"
            value={'Save as'}
            onClick={this.handleClick.bind(this)} >
          </input>
        </div>
      </div>
    );
  }
}

SequenceBuilderButton.propTypes = {
  name: PropTypes.string.isRequired,
  updateActions: PropTypes.func.isRequired
}
