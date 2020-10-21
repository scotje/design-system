import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  children: null,
  loading: false,
  className: '',
};

const PageHeaderExtras = ({ children, loading, className }) => {
  if (loading) {
    return null;
  }

  return (
    <div className={classNames('rc-page-header-extras', className)}>{children}</div>
  );
};

PageHeaderExtras.propTypes = propTypes;
PageHeaderExtras.defaultProps = defaultProps;

PageHeaderExtras.isPageHeader = true;

export default PageHeaderExtras;
