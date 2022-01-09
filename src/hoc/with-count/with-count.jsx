import React from 'react';
import PropTypes from 'prop-types';
import withCountStyles from './with-count.module.css';

const withCount = (WrappedComponent) => {
  const WithCount = ({ count }) => (
    <div className={withCountStyles['wrapper']}>
      <div className={withCountStyles['counter']}>{count}</div>
      <WrappedComponent />
    </div>
  );

  WithCount.propTypes = {
    count: PropTypes.number
  };

  WithCount.defaultProps = {
    count: 4
  };

  return WithCount;
};

withCount.propTypes = {
  WrappedComponent: PropTypes.node
};

export default withCount;
