import React from 'react';

const Pagination = ({ page, onPreviousClick, onNextClick }) => {
  return (
    <nav>
      <ul className="pager">
        <li>
          <button className="btn btn-primary" onClick={onPreviousClick}>
            <span>&laquo;</span>
          </button>
        </li>
        <li>&nbsp;Page {page}&nbsp;</li>
        <li>
          <button className="btn btn-primary" onClick={onNextClick}>
            <span>&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
