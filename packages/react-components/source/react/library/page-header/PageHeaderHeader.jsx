import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const PageHeaderHeader = ({ children }) => {
  return <div className="rc-page-header-header">{children}</div>;
};

PageHeaderHeader.propTypes = propTypes;
PageHeaderHeader.defaultProps = defaultProps;

PageHeaderHeader.isPageHeader = true;

export default PageHeaderHeader;
