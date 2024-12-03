import React from 'react';
import PropTypes from 'prop-types';

/**
 * A button that fires a sequence
 */
export class ManualButton extends React.PureComponent {
  handleClick() {
    console.log(this.props.name)
    console.log(this.props.position)
    //const seq = this.props.name;
    //fetch(`/s/${seq}`)
    //  .then((response) => { console.log(`${seq} gesture fired`) });
  }

  render() {
    return (
      <div id = {this.props.name} className="row">
        <div className="col-xs-4">
          <input
            className="btn btn-primary"
            type="button"
            value = "Send!"
            onClick={this.handleClick.bind(this)} >
          </input>
        </div>
      </div>
    );
  }
}

ManualButton.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
}
