import React from 'react';
import { GestureSearchBar } from "./gesture_search_bar";
import { GestureCollection } from "./gesture_collection";

/**
 * A panel that houses a collection of GestureButtons and provides filtering functionality over them
 */
export class GestureMenuVC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
    }

    this.handleFilter = this.handleFilter.bind(this)
  }

  handleFilter(newFilter) {
    this.setState({
      filter : newFilter.target.value.toLowerCase(),
    });
  }

  render() {
    return (
      <div className="w-20">
        <GestureSearchBar onChange={this.handleFilter} />
        <GestureCollection filter={this.state.filter}/>
      </div>
    );
  }
}
