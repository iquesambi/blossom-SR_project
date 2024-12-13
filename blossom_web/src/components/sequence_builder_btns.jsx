import React from 'react';
import PropTypes from 'prop-types';

/**
 * A button that fires a sequence
 */
export class SequenceBuilderButtons extends React.PureComponent {
 

  render() {
    return (
      <div>
        <input
          id={this.props.name}
          className="btn btn-primary"
          type="button"
          value="Button">
        </input>

        <input
          id={this.props.name}
          className="btn btn-primary"
          type="button"
          value="Button">
        </input>

        <input
          id={this.props.name}
          className="btn btn-primary"
          type="button"
          value="Button">
        </input>
      
      </div>
    );
  }
}

SequenceBuilderButtons.propTypes = {
  name: PropTypes.string.isRequired,
}
