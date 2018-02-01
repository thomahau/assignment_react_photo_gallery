import React, { Component } from 'react';
import Gallery from './Gallery';
import InputGroup from './elements/InputGroup';
import Input from './elements/Input';
import Select from './elements/Select';
import SortButton from './SortButton';
import Pagination from './Pagination';
import { getFilters } from '../helpers/search';

class FilterableGallery extends Component {
  constructor() {
    super();
    this.state = {
      filters: getFilters(),
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
    const { filters, igFilter, searchQuery, sortDirection, page } = this.state;

    return (
      <form>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 well text-left">
            <InputGroup name="igFilter" labelText="Filter">
              <Select
                name="igFilter"
                options={filters}
                value={igFilter}
                onChange={this.onChangeInput}
              />
            </InputGroup>
            <InputGroup name="searchQuery" labelText="Search">
              <Input
                name="searchQuery"
                value={searchQuery}
                onChange={this.onChangeInput}
              />
            </InputGroup>
            <SortButton
              sortDirection={sortDirection}
              onSortClick={this.onSortClick}
            />
          </div>
        </div>
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
      </form>
    );
  }
}

export default FilterableGallery;
