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
        <button
          id={this.props.text}
          className="btn btn-primary"
          onClick={this.handleClick.bind(this)} 
          style={{background: "#6133DA"}}>
          

          <img
            src={this.props.iconSrc}
            alt={this.props.text} 
            style={{color: 'white', width:'24px', height:'26px'}}
          />
        </button>
    )
  }
}

SequenceBuilderButton.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  updateActions: PropTypes.func.isRequired,
  save: PropTypes.bool.isRequired
}
