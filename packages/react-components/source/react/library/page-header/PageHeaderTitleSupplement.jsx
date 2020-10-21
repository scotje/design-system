import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
};

const defaultProps = {
  children: null,
  loading: false,
};

/**
 * Used for badges and other things located next to the title
 */
const PageHeaderTitleSupplement = ({ children, loading }) => (
  <div className="rc-page-header-title-supplement">{!loading && children}</div>
);

PageHeaderTitleSupplement.propTypes = propTypes;
PageHeaderTitleSupplement.defaultProps = defaultProps;

PageHeaderTitleSupplement.isPageHeader = true;

export default PageHeaderTitleSupplement;
