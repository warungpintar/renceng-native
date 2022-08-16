import React from 'react';
import {render} from '@testing-library/react-native';
import {Text, colors} from '@warungpintar/renceng-native';

describe('Text', () => {
  test('basic', () => {
    const props = {
      testID: 'my-text',
      fontSize: 12,
    };
    const {queryByTestId, toJSON} = render(
      <Text {...props}>Text Content</Text>,
    );
    const textQuery = queryByTestId('my-text');
    const style = textQuery.props.style[0];
    const content = textQuery.children.toString();
    expect(style.color).toMatch('#161616');
    expect(style.fontSize).toEqual(12);
    expect(content.match('Text Content'));
    expect(toJSON()).toMatchSnapshot();
  });
  test('category', () => {
    const props = {
      testID: 'my-text',
      category: 'md',
    };
    const {queryByTestId, toJSON} = render(
      <Text {...props}>Text Content</Text>,
    );
    const textQuery = queryByTestId('my-text');
    const style = textQuery.props.style[0];
    const content = textQuery.children.toString();
    expect(style.color).toMatch('#161616');
    expect(style.fontSize).toEqual(14);
    expect(content.match('Text Content'));
    expect(toJSON()).toMatchSnapshot();
  });
  test('align', () => {
    const props = {
      testID: 'my-text',
    };
    const {queryByTestId, toJSON} = render(
      <Text {...props} textAlign="left">
        Text Content
      </Text>,
    );
    const textQuery = queryByTestId('my-text');
    const style = textQuery.props.style[0];
    const content = textQuery.children.toString();
    expect(style.color).toMatch('#161616');
    expect(style.textAlign).toMatch('left');
    expect(content.match('Text Content'));
    expect(toJSON()).toMatchSnapshot();
  });
  test('color', () => {
    const props = {
      testID: 'my-text',
      color: colors.primary,
    };
    const {queryByTestId, toJSON} = render(
      <Text {...props}>Text Content</Text>,
    );
    const textQuery = queryByTestId('my-text');
    const style = textQuery.props.style[0];
    const content = textQuery.children.toString();
    expect(style.color).toMatch('#FECF28');
    expect(content.match('Text Content'));
    expect(toJSON()).toMatchSnapshot();
  });
});
