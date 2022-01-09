import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import Container from '../../grid/container/container';

const Base = ({
  children
}) => {
  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
    </>
  );
};

Base.propTypes = {
  children: PropTypes.node
};

Base.defaultProps = {
  children: null
};

export default Base;
