import React, { useSyncExternalStore } from 'react';
import PropTypes from 'prop-types';

/**
 * A button that fires a sequence
 */
export class PosButton extends React.PureComponent {
  handleClick() {
    fetch(`/add_sequence`, {
      method: 'POST',
      body: JSON.stringify([{
        x: 80,
        y: 0,
        z: 0,
        h: 50,
        ears: 50,
        time: 0,
      },
      {
        x: 0,
        y: 0,
        z: 80,
        h: 50,
        ears: 50,
        time: 2,
      }]),
    })
    .catch(() => {});
  }

  render() {
    return (
      <div id = {this.props.name} className="row">
        <div className="col-xs-4">
          <input
            id={this.props.name}
            className="btn btn-primary"
            type="button"
            value={'Add sequence'}
            onClick={this.handleClick.bind(this)} >
          </input>
        </div>
      </div>
    );
  }
}

PosButton.propTypes = {}
