import React from 'react';
import { GestureMenuVC } from "./gesture_menu_view_controller";
import { ManualMenuVC } from './manual_menu_view_controller';
import { SequenceBuilderVC } from './sequence_builder_menu_view_controller';

/**
 * An app for browsing and playing sequences.
 */
export class GestureApp extends React.Component {

  render() {
    return (
      <div className="gesture-app">
        <div className="container">
          <h1 className="text-center">Blossom Controls</h1>
          <div className = "row">
            <div>
              <h4>Sequence Mode</h4>
              <div className="blossom-controls">
                <GestureMenuVC />
              </div>
            </div>
          
            <div>
              <h4>Manual Mode</h4>
              <div className="blossom-controls">
                <ManualMenuVC />
              </div>
            </div>

            <div>
              <h4>Sequence Builder</h4>
              <div className="blossom-controls">
                <SequenceBuilderVC />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
