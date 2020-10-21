import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
};

const defaultProps = {
  children: '',
  loading: false,
};

const PageHeaderActions = ({ children, loading }) => {
  return !loading && <div className="rc-page-header-actions">{children}</div>;
};

PageHeaderActions.propTypes = propTypes;
PageHeaderActions.defaultProps = defaultProps;

PageHeaderActions.isPageHeader = true;

export default PageHeaderActions;
