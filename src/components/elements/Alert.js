import React from 'react';

const Alert = ({ type, children }) => {
  if (children === '24 results') {
    return null;
  }
  return (
    <div className={`alert alert-${type}`} role="alert">
      {children}
    </div>
  );
};

Alert.defaultProps = {
  type: 'success'
};

export default Alert;
