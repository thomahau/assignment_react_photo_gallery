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
      sortCategory: '',
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

  onIconClick = e => {
    if (e.target.className.includes('heart')) {
      this.setState({
        sortCategory: 'likes'
      });
    } else if (e.target.className.includes('comment')) {
      this.setState({
        sortCategory: 'comments'
      });
    }
  };

  onPreviousClick = e => {
    if (this.state.page >= 2) {
      this.setState({
        page: this.state.page - 1
      });
    }
  };

  onNextClick = e => {
    this.setState({
      page: this.state.page + 1
    });
  };

  render() {
    const {
      igFilter,
      searchQuery,
      sortDirection,
      sortCategory,
      page
    } = this.state;

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
          sortCategory={sortCategory}
          page={page}
          onIconClick={this.onIconClick}
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
