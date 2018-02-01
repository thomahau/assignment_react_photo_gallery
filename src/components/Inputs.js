import React, { Component } from 'react';
import InputGroup from './elements/InputGroup';
import Input from './elements/Input';
import Select from './elements/Select';
import SortButton from './SortButton';
import { getFilters } from '../helpers/search';

const filters = getFilters();

class Inputs extends Component {
  render() {
    const {
      igFilter,
      searchQuery,
      sortDirection,
      onChange,
      onSortClick
    } = this.props;

    return (
      <div className="col-sm-6 col-sm-offset-3 well text-left">
        <form>
          <InputGroup name="igFilter" labelText="Filter">
            <Select
              name="igFilter"
              options={filters}
              value={igFilter}
              onChange={onChange}
            />
          </InputGroup>
          <InputGroup name="searchQuery" labelText="Search">
            <Input name="searchQuery" value={searchQuery} onChange={onChange} />
          </InputGroup>
          <SortButton sortDirection={sortDirection} onSortClick={onSortClick} />
        </form>
      </div>
    );
  }
}

export default Inputs;
