import React from 'react';
import { shallow, mount } from 'enzyme';

import PageHeader from './PageHeader';

test('renders provided children', () => {
  const content = <div>Content</div>;
  shallow(<PageHeader>{content}</PageHeader>).should.contain(content);
});

test('augments subcomponents with the value of loading prop', () => {
  const wrapper = shallow(
    <PageHeader>
      <PageHeader.Header>
        <PageHeader.Title>Hi</PageHeader.Title>
      </PageHeader.Header>
    </PageHeader>,
  );

  wrapper.find(PageHeader.Header).should.have.prop('loading', false);
  wrapper.find(PageHeader.Title).should.have.prop('loading', false);

  wrapper.setProps({ loading: true });

  wrapper.find(PageHeader.Header).should.have.prop('loading', true);
  wrapper.find(PageHeader.Title).should.have.prop('loading', true);
});

describe('Header', () => {
  test('should render children if loading or not', () => {
    const wrapper = shallow(<PageHeader.Header>Hi</PageHeader.Header>);

    wrapper.should.contain.text('Hi');

    wrapper.setProps({ loading: true });

    wrapper.should.contain.text('Hi');
  });
});

describe('SubHeader', () => {
  test('should not render children if not loading, only ellipsis', () => {
    const wrapper = mount(<PageHeader.SubHeader>Hi</PageHeader.SubHeader>);

    wrapper.should.contain.text('Hi');

    wrapper.setProps({ loading: true });

    wrapper.should.not.contain.text('Hi');
    wrapper.should.have.className('top-matter-ellipsis');
  });
});

describe('Title', () => {
  test('should render children if loading or not', () => {
    const wrapper = mount(<PageHeader.Title>Hi</PageHeader.Title>);

    wrapper.should.contain.text('Hi');

    wrapper.setProps({ loading: true });

    wrapper.should.contain.text('Hi');
  });
});

describe('TitleSupplement', () => {
  test('should render children if not loading', () => {
    const wrapper = shallow(
      <PageHeader.TitleSupplement>Hi</PageHeader.TitleSupplement>,
    );

    wrapper.should.contain.text('Hi');

    wrapper.setProps({ loading: true });

    wrapper.should.not.contain.text('Hi');
  });
});

describe('Actions', () => {
  test('should render children if not loading', () => {
    const wrapper = shallow(<PageHeader.Actions>Hi</PageHeader.Actions>);

    wrapper.should.contain.text('Hi');

    wrapper.setProps({ loading: true });

    wrapper.should.not.contain.text('Hi');
  });
});

describe('MetaData', () => {
  test('should render label but not value when loading', () => {
    const wrapper = mount(<PageHeader.Metadata label="Label" value="Value" />);

    wrapper.should.contain.text('Label');
    wrapper.should.contain.text('Value');

    wrapper.setProps({ loading: true });

    wrapper.should.contain.text('Label');
    wrapper.should.not.contain.text('Value');
  });
});
