import React from 'react';
import { mount } from 'enzyme';
import usePrevious from '../../source/react/helpers/usePrevious/usePrevious';

test('returns nothing on first render', () => {
  // eslint-disable-next-line
  const TestComponent = ({ test }) => {
    const value = usePrevious(test);

    return <div>{value}</div>;
  };

  expect(mount(<TestComponent test="test1" />)).to.have.text('');
});

test('returns nothing on first render', () => {
  // eslint-disable-next-line
  const TestComponent = ({ test }) => {
    const value = usePrevious(test);

    return <div>{value}</div>;
  };

  const wrapper = mount(<TestComponent test="test1" />);

  wrapper.setProps({ test: 'test2' });

  expect(wrapper).to.have.text('test1');
});
