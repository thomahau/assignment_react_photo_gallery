import React from 'react';

const Select = props => {
  const { options, ...restOfProps } = props;
  const optionElements = options.map(option => (
    <option key={option} value={option}>
      {option}
    </option>
  ));

  return (
    <select className="form-control" {...restOfProps}>
      <option selected value="">
        All Filters
      </option>
      {optionElements}
    </select>
  );
};

export default Select;
