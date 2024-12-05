import React from 'react';
import PropTypes from 'prop-types';

/**
 * A button that fires a manual position move
 */
export class ManualButton extends React.PureComponent {
  handleClick() {
    fetch(`/position`, {
      method: 'POST',
      body: JSON.stringify({
        x: 0,
        y: 0,
        z: 80,
        h: 50,
        ears: 50,
        ax: 0,
        ay: 0,
        az: 0,
        mirror: false,
      }),
    })
    .catch(() => {});
  }

  render() {
    return (
      <div id = {this.props.name} className="row">
        <div className="col-xs-4">
          <input
            className="btn btn-primary"
            type="button"
            value = "Go to Position"
            onClick={this.handleClick.bind(this)} >
          </input>
        </div>
      </div>
    );
  }
}

ManualButton.propTypes = {}
