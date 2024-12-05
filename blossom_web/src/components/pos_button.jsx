import React, { useSyncExternalStore } from 'react';
import PropTypes from 'prop-types';

/**
 * A button that fires a sequence
 */
export class PosButton extends React.PureComponent {
  handleClick() {
    console.log(this.props.alpha);
    /*fetch(`/position`, {
      method: 'POST',
      body: JSON.stringify({
        x: this.props.alpha,
        y: this.props.beta,
        z: this.props.gamma,
        h: this.props.h,
        ears: this.props.ears,
        ax: 0,
        ay: 0,
        az: 0,
        mirror: false,
      }),
    })
    .catch(() => {});*/
    //const seq = this.props.name;
    //fetch(`/s/${seq}`)
    //  .then((response) => { console.log(`${seq} gesture fired`) });
  }

  render() {
    return (
      <div id = {this.props.name} className="row">
        <div className="col-xs-4">
          <input
            id={this.props.name}
            className="btn btn-primary"
            type="button"
            value={'Go to position'}
            onClick={this.handleClick.bind(this)} >
          </input>
        </div>
      </div>
    );
  }
}

PosButton.propTypes = {
  alpha: PropTypes.int.isRequired,
  beta: PropTypes.int.isRequired,
  gamma: PropTypes.int.isRequired,
  h: PropTypes.int.isRequired,
  ears: PropTypes.int.isRequired
}
