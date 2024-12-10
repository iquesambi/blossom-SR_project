
import React from 'react';
import PropTypes from 'prop-types';

/**
 * A button that fires a sequence
 */
export class ActionButton extends React.PureComponent {
  handleClick() {
      console.log("Action " + this.props.id + " clicked!")
  }

  render() {
    return (
      <div id = {this.props.id} className="row mx-4">
        <div className="col-xs-4">
          <input
            id={this.props.id}
            className="btn btn-primary w-100"
            type="button"
            value={this.props.id}
            onClick={this.handleClick.bind(this)} >
          </input>
        </div>
      </div>
    );
  }
}

ActionButton.propTypes = {
  id: PropTypes.number.isRequired,
}