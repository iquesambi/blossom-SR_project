import React from 'react';
import { GestureMenuVC } from "./gesture_menu_view_controller";
import { ManualButton } from './manual_button';
/**
 * An app for browsing and playing sequences.
 */
export class GestureApp extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state to store input values
    this.state = {
      towerName: '',
      position: '',
    };

    // Bind input change handlers to 'this'
    this.handleTowerNameChange = this.handleTowerNameChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
  }

  // Handler for the Tower Name input change
  handleTowerNameChange(event) {
    this.setState({ towerName: event.target.value });
  }

  // Handler for the Position input change
  handlePositionChange(event) {
    this.setState({ position: event.target.value });
  }
  render() {
    return (
      <div className="gesture-app">
        <div className="container">
          <h1 className="text-center">Blossom Controls</h1>
          <div className = "row">
            <div>
              <h4>Scroll for more buttons</h4>
              <div className="blossom-controls">
                <GestureMenuVC />
              </div>
            </div>
          
            <div>
              <h4>Manual Mode</h4>
              <div className="blossom-controls">
                <h5>Tower Name</h5>
                <input
                  type="text"
                  value={this.state.towerName}
                  onChange={this.handleTowerNameChange}
                />
                <h5>Position</h5>
                <input
                  type="text"
                  value={this.state.position}
                  onChange={this.handlePositionChange}
                />
                <ManualButton name={this.state.towerName} position={this.state.position} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
