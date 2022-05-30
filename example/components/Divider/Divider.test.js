import React from 'react';
import {render} from '@testing-library/react-native';
import {Divider} from '@warungpintar/renceng-native';

describe('Divider', () => {
  test('basic, should render without props', () => {
    const {toJSON, queryByTestId} = render(<Divider testID="myDivider" />);
    const style = queryByTestId('myDivider').props.style[0];
    expect(style.borderBottomColor).toBeTruthy();
    expect(style.borderBottomColor).toEqual('black');
    expect(style.borderBottomWidth).toBeTruthy();
    expect(style.borderBottomWidth).toEqual(1);
    expect(style.borderStyle).toBeTruthy();
    expect(style.borderStyle).toEqual('solid');

    expect(toJSON).toMatchSnapshot();
  });

  test('Width', () => {
    const props = {
      size: 4,
      color: 'black',
      type: 'solid',
      testID: 'myDivider',
    };
    const {toJSON, queryByTestId} = render(<Divider {...props} />);
    const style = queryByTestId('myDivider').props.style[0];
    expect(style.borderBottomColor).toBeTruthy();
    expect(style.borderBottomColor).toEqual('black');
    expect(style.borderBottomWidth).toBeTruthy();
    expect(style.borderBottomWidth).toEqual(4);
    expect(style.borderStyle).toBeTruthy();
    expect(style.borderStyle).toEqual('solid');

    expect(toJSON).toMatchSnapshot();
  });

  test('Solid', () => {
    const props = {
      size: 1,
      color: 'black',
      type: 'solid',
      testID: 'myDivider',
    };
    const {toJSON, queryByTestId} = render(<Divider {...props} />);
    const style = queryByTestId('myDivider').props.style[0];
    expect(style.borderBottomColor).toBeTruthy();
    expect(style.borderBottomColor).toEqual('black');
    expect(style.borderBottomWidth).toBeTruthy();
    expect(style.borderBottomWidth).toEqual(1);
    expect(style.borderStyle).toBeTruthy();
    expect(style.borderStyle).toEqual('solid');

    expect(toJSON).toMatchSnapshot();
  });

  test('Dashed', () => {
    const props = {
      size: 1,
      color: 'black',
      type: 'dashed',
      testID: 'myDivider',
    };
    const {toJSON, queryByTestId} = render(<Divider {...props} />);
    const style = queryByTestId('myDivider').props.style[0];
    expect(style.borderBottomColor).toBeTruthy();
    expect(style.borderBottomColor).toEqual('black');
    expect(style.borderBottomWidth).toBeTruthy();
    expect(style.borderBottomWidth).toEqual(1);
    expect(style.borderStyle).toBeTruthy();
    expect(style.borderStyle).toEqual('dashed');

    expect(toJSON).toMatchSnapshot();
  });

  test('Color', () => {
    const props = {
      size: 1,
      color: '#FECF28',
      type: 'dashed',
      testID: 'myDivider',
    };
    const {toJSON, queryByTestId} = render(<Divider {...props} />);
    const style = queryByTestId('myDivider').props.style[0];
    expect(style.borderBottomColor).toBeTruthy();
    expect(style.borderBottomColor).toEqual('#FECF28');
    expect(style.borderBottomWidth).toBeTruthy();
    expect(style.borderBottomWidth).toEqual(1);
    expect(style.borderStyle).toBeTruthy();
    expect(style.borderStyle).toEqual('dashed');

    expect(toJSON).toMatchSnapshot();
  });
});
