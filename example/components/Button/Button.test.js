import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {Button, Variants} from 'renceng-native';

const {ButtonVariants} = Variants;

describe('Button', () => {
  describe('use variant props', () => {
    const mockFn = jest.fn(() => null);
    const primaryProps = {
      testID: 'myPrimaryButton',
      variant: 'primary',
      size: 'md',
      title: 'My Button',
      onPress: mockFn,
    };
    /*
      FIXME: This test uses render at every case since
      it's unmounted before it finish running each cases
    */
    it('outputs correct title/text', () => {
      const {getByText, toJSON} = render(<Button {...primaryProps} />);

      expect(getByText('My Button')).toBeTruthy();
      expect(toJSON()).toMatchSnapshot();
    });

    it('fires the assigned event on press', async () => {
      const {queryByTestId, toJSON} = render(<Button {...primaryProps} />);
      const primaryButton = queryByTestId('myPrimaryButton');
      fireEvent.press(primaryButton);
      fireEvent.press(primaryButton);

      await waitFor(() => expect(mockFn.mock.calls.length).toBe(2));
      expect(toJSON()).toMatchSnapshot();
    });

    it('renders primary variant correctly', () => {
      const {queryByTestId, toJSON} = render(<Button {...primaryProps} />);
      const btnProps = queryByTestId('myPrimaryButton').props;

      expect(btnProps.style?.[0]?.backgroundColor).toMatch('#FECF28');
      expect(toJSON()).toMatchSnapshot();
    });

    it('renders successfully', () => {
      const activeButton = render(<Button {...primaryProps} />);
      const {toJSON} = activeButton;

      expect(activeButton).toBeDefined();
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('use size props correctly', () => {
    const mockFn = jest.fn(() => null);
    const primaryProps = {
      testID: 'myPrimaryButton',
      variant: 'primary',
      size: 'lg',
      title: 'My Button',
      onPress: mockFn,
    };

    it('outputs correct title/text', () => {
      const {getByText, toJSON} = render(<Button {...primaryProps} />);

      expect(getByText('My Button')).toBeTruthy();
      expect(toJSON()).toMatchSnapshot();
    });

    it('fires the assigned event on press', async () => {
      const {queryByTestId, toJSON} = render(<Button {...primaryProps} />);
      const primaryButton = queryByTestId('myPrimaryButton');
      fireEvent.press(primaryButton);
      fireEvent.press(primaryButton);

      await waitFor(() => expect(mockFn.mock.calls.length).toBe(2));
      expect(toJSON()).toMatchSnapshot();
    });

    it('renders primary variant and large size correctly', () => {
      const {queryByTestId, toJSON} = render(<Button {...primaryProps} />);
      const btnProps = queryByTestId('myPrimaryButton').props;

      expect(btnProps.style?.[0]?.backgroundColor).toMatch(
        ButtonVariants.variants.primary.bg,
      );
      expect(btnProps.style?.[0]?.fontSize).toBe(16);
      expect(btnProps.style?.[0]?.paddingTop).toBe(20);
      expect(btnProps.style?.[0]?.paddingBottom).toBe(20);
      expect(btnProps.style?.[0]?.paddingLeft).toBe(36);
      expect(btnProps.style?.[0]?.paddingRight).toBe(36);
      expect(toJSON()).toMatchSnapshot();
    });

    it('renders successfully', () => {
      const activeButton = render(<Button {...primaryProps} />);
      const {toJSON} = activeButton;

      expect(activeButton).toBeDefined();
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('in disabled/inactive state', () => {
    const mockFn = jest.fn(() => null);
    const disabledProps = {
      testID: 'myDisabledButton',
      variant: 'primary',
      size: 'md',
      title: 'My Button',
      onPress: mockFn,
      disabled: true,
    };

    it('outputs correct title/text', () => {
      const {getByText, toJSON} = render(<Button {...disabledProps} />);

      expect(getByText('My Button')).toBeTruthy();
      expect(toJSON()).toMatchSnapshot();
    });

    it("doesn't fire event on press", async () => {
      const {queryByTestId, toJSON} = render(<Button {...disabledProps} />);
      const myDisabledButton = queryByTestId('myDisabledButton');
      fireEvent.press(myDisabledButton);

      await waitFor(() => expect(mockFn.mock.calls.length).toBe(0));
      expect(toJSON()).toMatchSnapshot();
    });

    it('shows correct color when disabled', () => {
      const {queryByTestId, toJSON} = render(<Button {...disabledProps} />);
      const btnProps = queryByTestId('myDisabledButton').props;

      expect(btnProps.style?.[0]?.backgroundColor).toMatch(
        ButtonVariants.variants.disabled.bg,
      );
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
