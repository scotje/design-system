import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text } from '@puppet/react-components';

const propTypes = {
  label: PropTypes.node,
  value: PropTypes.node,
  loading: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  label: '',
  value: '',
  loading: false,
  className: '',
};

const PageHeaderMetadata = ({ label, value, loading, className, ...props }) => {
  return (
    <div className={`rc-page-header-metadata ${className}`} {...props}>
      <Heading as="h5" className="rc-page-header-metadata-label">
        {label}
      </Heading>
      <Text
        color="medium"
        size="medium"
        className="rc-page-header-metadata-value"
      >
        {!loading && value}
      </Text>
    </div>
  );
};

PageHeaderMetadata.propTypes = propTypes;
PageHeaderMetadata.defaultProps = defaultProps;

PageHeaderMetadata.isPageHeader = true;

export default PageHeaderMetadata;
