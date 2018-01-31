import React, { Component } from 'react';
import Gallery from './Gallery';
import InputGroup from './elements/InputGroup';
import Input from './elements/Input';
import Select from './elements/Select';
import Pagination from './Pagination';
import { getFilters } from '../helpers/search';
import data from '../photos';

class FilterableGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      igFilter: '',
      searchQuery: '',
      filters: getFilters(),
      page: 1
    };
  }

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
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
    const { igFilter, searchQuery, filters, page } = this.state;

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
          </div>
        </div>
        <Gallery
          photos={data}
          igFilter={igFilter}
          searchQuery={searchQuery}
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
