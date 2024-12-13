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
      actions: this.props.getActions(),
      save: this.props.save
     }),
    })
    .catch(() => {});
    console.log(this.props.name);
    console.log(this.props.getActions());
  }

  render() {
    return (
      <input
        id={this.props.text}
        className="btn btn-primary"
        type="button"
        value={this.props.text}
        onClick={this.handleClick.bind(this)} 
        style={{background: "#6133DA"}}>
      </input>
    )
  }
}

SequenceBuilderButton.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  updateActions: PropTypes.func.isRequired,
  save: PropTypes.bool.isRequired
}
