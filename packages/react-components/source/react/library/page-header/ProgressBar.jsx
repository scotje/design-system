import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import usePrevious from '../../helpers/usePrevious';

const useLoadingCycle = (loading) => {
  const [stage, setStage] = useState('ready');
  const previouslyLoading = usePrevious(loading);

  useEffect(() => {
    if (previouslyLoading == null && loading) {
      setTimeout(() => setStage('loading'), 100);
    }

    if (previouslyLoading != null && loading !== previouslyLoading) {
      if (loading) {
        setStage('loading');
      }

      if (!loading) {
        setStage('complete');
        setTimeout(() => setStage('ready'), 600);
      }
    }
  }, [loading]);

  return stage;
};

const propTypes = {
  loading: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  loading: false,
  className: '',
};

const ProgressBar = ({ loading, className }) => {
  const stage = useLoadingCycle(loading);
  return (
    <div
      className={classNames('progress-bar', `progress-bar-${stage}`, className)}
    >
      <div className="bar" />
    </div>
  );
};

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
