import React from 'react';
import { GestureMenuVC } from "./gesture_menu_view_controller";
import { ManualMenuVC } from './manual_menu_view_controller';
import { SequenceBuilderVC } from './sequence_builder_menu_view_controller';
import { CameraView } from './camera_view';

/**
 * An app for browsing and playing sequences.
 */
export class GestureApp extends React.Component {

  render() {
    return (
      <div className="gesture-app">
        <div className="container text-center col">
          <h1 className="text-center">Blossom Controls</h1>
          <div className = "row justify-content-center">
            <div>
              <h4>Gesture Menu</h4>
              <div className="blossom-controls mx-2">
                <GestureMenuVC />
              </div>
            </div>
          
            <div>
              <h4>Manual Menu</h4>
              <div className="blossom-controls mx-2">
                <ManualMenuVC />
              </div>
            </div>

            <div>
              <h4>Sequence Builder</h4>
              <SequenceBuilderVC />
            </div>
          </div>
          <div className = "row justify-content-center">
            <CameraView />
          </div>
        </div>
      </div>
    );
  }
}
