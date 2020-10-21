import React, { cloneElement, Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ProgressBar from 'components/ProgressBar';
import PageHeaderHeader from './PageHeaderHeader';
import PageHeaderTitle from './PageHeaderTitle';
import PageHeaderActions from './PageHeaderActions';
import PageHeaderSubHeader from './PageHeaderSubHeader';
import PageHeaderMetadata from './PageHeaderMetadata';
import PageHeaderTitleSupplement from './PageHeaderTitleSupplement';
import PageHeaderExtras from './PageHeaderExtras';

const propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
  tabs: PropTypes.bool,
};

const defaultProps = {
  children: null,
  loading: false,
  tabs: false,
};

const augmentChildProps = (children, extraProps) =>
  Children.map(children, (child) => {
    if (child?.type?.isPageHeader) {
      return cloneElement(
        child,
        extraProps,
        augmentChildProps(child?.props?.children, extraProps),
      );
    }

    return child;
  });

const PageHeader = ({ children, loading, tabs }) => {
  return (
    <>
      <div
        className={classNames('rc-page-header', { tabs, 'not-loading': !loading })}
      >
        {augmentChildProps(children, { loading })}
        <ProgressBar
          loading={loading}
          className="rc-page-header-progress-bar"
        />
      </div>
    </>
  );
};

PageHeader.propTypes = propTypes;
PageHeader.defaultProps = defaultProps;

PageHeader.Header = PageHeaderHeader;
PageHeader.Title = PageHeaderTitle;
PageHeader.Actions = PageHeaderActions;
PageHeader.SubHeader = PageHeaderSubHeader;
PageHeader.Metadata = PageHeaderMetadata;
PageHeader.TitleSupplement = PageHeaderTitleSupplement;
PageHeader.Extras = PageHeaderExtras;

export default PageHeader;
