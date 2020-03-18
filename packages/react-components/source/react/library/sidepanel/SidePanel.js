import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Heading from '../heading';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  closeButtonProps: PropTypes.shape({}),
  contentClassName: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.oneOf(['toolbar']).isRequired,
};

const defaultProps = {
  children: null,
  closeButtonProps: {},
  open: true,
  title: '',
  onClose() {},
  className: '',
  contentClassName: '',
};

/**
 * SidePanel may be used inside the rightmost Columns.Column.
 */
const SidePanel = ({
  children,
  open,
  title,
  onClose,
  className,
  closeButtonProps,
  contentClassName,
}) => {
  const actions = (
    <Button
      icon="x"
      type="transparent"
      innerFocus
      aria-label="Close side panel"
      onClick={onClose}
      {...closeButtonProps}
    />
  );

  return (
    open && (
      <div className={`rc-sidepanel ${className}`}>
        <div className="rc-sidepanel-toolbar">
          <Heading
            as="h5"
            className="rc-sidepanel-heading"
            id="rc-sidepanel-header"
          >
            {title}
          </Heading>
          <div className="rc-sidepanel-actions">{actions}</div>
        </div>
        <div className={`rc-sidepanel-content ${contentClassName}`}>
          {children}
        </div>
      </div>
    )
  );
};

SidePanel.propTypes = propTypes;
SidePanel.defaultProps = defaultProps;

export default SidePanel;
