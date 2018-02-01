import React, { Component } from 'react';
import Inputs from './Inputs';
import Gallery from './Gallery';
import Pagination from './Pagination';

class FilterableGallery extends Component {
  constructor() {
    super();
    this.state = {
      igFilter: '',
      searchQuery: '',
      sortDirection: 'Descending',
      page: 1
    };
  }

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSortClick = e => {
    e.preventDefault();
    if (this.state.sortDirection === 'Descending') {
      this.setState({
        sortDirection: 'Ascending'
      });
    } else {
      this.setState({
        sortDirection: 'Descending'
      });
    }
  };

  onPreviousClick = e => {
    e.preventDefault();
    if (this.state.page >= 2) {
      this.setState({
        page: this.state.page - 1
      });
    }
  };

  onNextClick = e => {
    e.preventDefault();
    this.setState({
      page: this.state.page + 1
    });
  };

  render() {
    const { igFilter, searchQuery, sortDirection, page } = this.state;

    return (
      <div className="row">
        <Inputs
          igFilter={igFilter}
          searchQuery={searchQuery}
          sortDirection={sortDirection}
          onChange={this.onChangeInput}
          onSortClick={this.onSortClick}
        />
        <Gallery
          igFilter={igFilter}
          searchQuery={searchQuery}
          sortDirection={sortDirection}
          page={page}
        />
        <Pagination
          page={page}
          onPreviousClick={this.onPreviousClick}
          onNextClick={this.onNextClick}
        />
      </div>
    );
  }
}

export default FilterableGallery;
