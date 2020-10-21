import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '@puppet/react-components';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const PageHeaderTitle = ({ children }) => (
  <Heading as="h2" className="rc-page-header-title">
    {children}
  </Heading>
);

PageHeaderTitle.propTypes = propTypes;
PageHeaderTitle.defaultProps = defaultProps;

PageHeaderTitle.isPageHeader = true;

export default PageHeaderTitle;
