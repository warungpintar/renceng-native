import React from 'react';
import {render} from '@testing-library/react-native';
import {View} from '@warungpintar/renceng-native';

describe('View', () => {
  test('basic', () => {
    const props = {
      testID: 'my-view',
      width: 200,
      height: 100,
      bg: 'white',
      borderWidth: 1,
      borderColor: 'black',
      borderStyle: 'solid',
    };
    const {queryByTestId, toJSON} = render(<View {...props}> </View>);
    const style = queryByTestId('my-view').props.style[0];
    expect(style.backgroundColor).toMatch('white');
    expect(style.borderColor).toMatch('black');
    expect(style.borderStyle).toMatch('solid');
    expect(style.borderWidth).toEqual(1);
    expect(style.height).toEqual(100);
    expect(style.width).toEqual(200);
    expect(toJSON()).toMatchSnapshot();
  });

  test('rounded', () => {
    const props = {
      testID: 'my-view',
      width: 200,
      height: 100,
      bg: 'white',
      borderWidth: 1,
      borderColor: 'black',
      borderStyle: 'solid',
      borderRadius: 8,
    };
    const {queryByTestId, toJSON} = render(<View {...props}> </View>);
    const style = queryByTestId('my-view').props.style[0];
    expect(style.backgroundColor).toMatch('white');
    expect(style.borderColor).toMatch('black');
    expect(style.borderStyle).toMatch('solid');
    expect(style.borderWidth).toEqual(1);
    expect(style.borderRadius).toEqual(8);
    expect(style.height).toEqual(100);
    expect(style.width).toEqual(200);
    expect(toJSON()).toMatchSnapshot();
  });

  test('shadow', () => {
    const props = {
      testID: 'my-view',
      width: 200,
      height: 100,
      bg: 'white',
      shadowColor: 'black',
      shadowOffset: {
        width: 4,
        height: 8,
      },
      shadowOpacity: 0.5,
      shadowRadius: 8,
      elevation: 8,
    };
    const {queryByTestId, toJSON} = render(<View {...props}> </View>);
    const style = queryByTestId('my-view').props.style[0];
    const elementProps = queryByTestId('my-view').props;
    expect(style.backgroundColor).toMatch('white');
    expect(style.height).toEqual(100);
    expect(style.width).toEqual(200);
    expect(elementProps.shadowColor).toMatch('black');
    expect(elementProps.shadowOffset).toEqual({width: 4, height: 8});
    expect(elementProps.shadowOpacity).toEqual(0.5);
    expect(elementProps.shadowRadius).toEqual(8);
    expect(elementProps.elevation).toEqual(8);
    expect(toJSON()).toMatchSnapshot();
  });

  test('color', () => {
    const props = {
      testID: 'my-view',
      width: 200,
      height: 100,
      bg: '#FECF28',
      borderWidth: 1,
      borderColor: 'black',
      borderStyle: 'solid',
    };
    const {queryByTestId, toJSON} = render(<View {...props}> </View>);
    const style = queryByTestId('my-view').props.style[0];
    expect(style.backgroundColor).toMatch('#FECF28');
    expect(style.borderColor).toMatch('black');
    expect(style.borderStyle).toMatch('solid');
    expect(style.borderWidth).toEqual(1);
    expect(style.height).toEqual(100);
    expect(style.width).toEqual(200);
    expect(toJSON()).toMatchSnapshot();
  });
});

// TODO: add more case
// TODO: add negative case
