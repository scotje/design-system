import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@puppet/react-components';

const propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
};

const defaultProps = {
  children: '',
  loading: false,
};

const ellipsis = (
  <div className="rc-page-header-ellipsis">
    <div className="e1" />
    <div className="e2" />
    <div className="e3" />
  </div>
);

const PageHeaderSubHeader = ({ children, loading }) => (
  <>
    {loading ? (
      ellipsis
    ) : (
      <Text className="rc-page-header-sub-header">{children}</Text>
    )}
  </>
);

PageHeaderSubHeader.propTypes = propTypes;
PageHeaderSubHeader.defaultProps = defaultProps;

PageHeaderSubHeader.isPageHeader = true;

export default PageHeaderSubHeader;
