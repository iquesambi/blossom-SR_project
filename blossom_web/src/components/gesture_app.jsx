import React from 'react';
import { GestureMenuVC } from "./gesture_menu_view_controller";
import { ManualButton } from './manual_button';
import { PosButton } from './pos_button';

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
      pitch: 0,
      roll: 0,
      yaw: 0,
      height: 0,
      ears: 0
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

            <div>
              <h4>Position Control</h4>
              <div className="blossom-controls">
                <h5>Pitch</h5>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={value}
                  onChange={(e) => setState({pitch: e.target.value})}
                />
                <h5>Roll</h5>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={value}
                  onChange={(e) => setState({roll: e.target.value})}
                />
                <h5>Yaw</h5>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={value}
                  onChange={(e) => setState({yaw: e.target.value})}
                />
                <h5>Height</h5>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={value}
                  onChange={(e) => setState({height: e.target.value})}
                />
                <h5>Ears</h5>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={value}
                  onChange={(e) => setState({ears: e.target.value})}
                />
                <PosButton alpha={this.state.pitch} beta={this.state.roll} gamma={this.state.yaw} h={this.state.height} ears={this.state.ears} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
