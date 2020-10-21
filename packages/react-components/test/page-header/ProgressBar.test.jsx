import React from 'react';
import { shallow } from 'enzyme';

import ProgressBar from '../../source/react/library/page-header/ProgressBar/ProgressBar';

test('renders without crashing', () => {
  shallow(<ProgressBar />);
});
