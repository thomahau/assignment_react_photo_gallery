import React, { Component } from 'react';

class SortButton extends Component {
  render() {
    return (
      <button className="btn btn-default" onClick={this.props.onSortClick}>
        Sorted By Time {this.props.sortDirection}
      </button>
    );
  }
}

export default SortButton;
