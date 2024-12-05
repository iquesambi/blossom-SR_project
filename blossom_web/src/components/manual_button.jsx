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
        x: -this.props.roll,
        y: this.props.pitch,
        z: -this.props.yaw,
        h: this.props.height,
        ears: this.props.ears,
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

ManualButton.propTypes = {
  pitch: PropTypes.number.isRequired,
  roll: PropTypes.number.isRequired,
  yaw: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  ears: PropTypes.number.isRequired,
}
