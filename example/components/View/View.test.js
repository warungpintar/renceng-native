import React from 'react';
import { render } from '@testing-library/react-native'
import { View } from 'renceng-native';

describe('View', () => {
  test('basic', () => {
    const props = {
      testID:"my-view",
      width: 200,
      height: 100,
      bg: 'white',
      borderWidth: 1,
      borderColor: 'black',
      borderStyle: 'solid',
    }
    const { queryByTestId, toJSON } = render(<View {...props}> </View>);
    const style = queryByTestId('my-view').props.style[0];
    expect(style.backgroundColor).toMatch('white');
    expect(style.borderColor).toMatch('black');
    expect(style.borderStyle).toMatch('solid');
    expect(style.borderWidth).toEqual(1);
    expect(style.height).toEqual(100);
    expect(style.width).toEqual(200);
    expect(toJSON()).toMatchSnapshot();
  });
});
