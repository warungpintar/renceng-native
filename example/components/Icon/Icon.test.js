import React from 'react';
import {render} from '@testing-library/react-native';
import {Icon} from 'renceng-native';

describe('Icon', () => {
  test('should render correctly with basic icon', () => {
    const props = {
      testID: 'my-icon',
      name: 'car',
      size: 16,
    };
    const {queryByTestId, toJSON} = render(<Icon {...props} />);
    const style = queryByTestId('my-icon').props;
    expect(style.width).toBe(16);
    expect(style.height).toBe(16);
    expect(style.fill).toMatch('black');
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render correctly with outline icon', () => {
    const props = {
      testID: 'my-icon',
      name: 'car-outline',
      size: 16,
    };
    const {queryByTestId, toJSON} = render(<Icon {...props} />);
    const style = queryByTestId('my-icon').props;
    expect(style.width).toBe(16);
    expect(style.height).toBe(16);
    expect(style.fill).toMatch('black');
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render correctly with color icon', () => {
    const props = {
      testID: 'my-icon',
      name: 'car-outline',
      size: 16,
      color: '#FECF28',
    };
    const {queryByTestId, toJSON} = render(<Icon {...props} />);
    const style = queryByTestId('my-icon').props;
    expect(style.width).toBe(16);
    expect(style.height).toBe(16);
    expect(style.fill).toMatch('#FECF28');
    expect(toJSON()).toMatchSnapshot();
  });
});
