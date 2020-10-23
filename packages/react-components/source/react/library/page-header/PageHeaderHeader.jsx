import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  children: PropTypes.node,
  className: PropsType.string,
};

const defaultProps = {
  children: null,
  className: '',
};

const PageHeaderHeader = ({ children, className, ...props }) => {
  return <div className={`rc-page-header-header ${className}`} {...props}>{children}</div>;
};

PageHeaderHeader.propTypes = propTypes;
PageHeaderHeader.defaultProps = defaultProps;

PageHeaderHeader.isPageHeader = true;

export default PageHeaderHeader;
