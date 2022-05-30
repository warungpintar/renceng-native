import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {Button, Variants} from '@warungpintar/renceng-native';

const {ButtonVariants, ButtonSizes} = Variants;

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

      expect(btnProps.style?.[0]?.backgroundColor).toMatch(
        ButtonVariants.variants.primary.bg,
      );
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

  describe('with icon', () => {
    const mockFn = jest.fn(() => null);
    const iconProps = {
      testID: 'myIconButton',
      variant: 'primary',
      size: 'md',
      title: 'My Button',
      onPress: mockFn,
      icon: 'car',
      iconPosition: 'left',
    };

    it('renders icon component', () => {
      const {queryAllByTestId, toJSON} = render(<Button {...iconProps} />);
      const iconElement = queryAllByTestId('btnIconLeft');

      expect(iconElement.length).toBe(1);
      expect(toJSON()).toMatchSnapshot();
    });

    it("shouldn't render icon component if icon property is empty", () => {
      const noIconProps = {
        testID: 'noIconButton',
        variant: 'primary',
        size: 'md',
        title: 'My Button',
        onPress: mockFn,
      };
      const {queryAllByTestId, toJSON} = render(<Button {...noIconProps} />);
      const iconElement = queryAllByTestId('btnIconLeft');

      expect(iconElement.length).toBe(0);
      expect(toJSON()).toMatchSnapshot();
    });

    it('renders icon component on the right side of button', () => {
      const rightIconProps = {
        testID: 'myIconButton',
        variant: 'primary',
        size: 'md',
        title: 'My Button',
        onPress: mockFn,
        icon: 'car',
        iconPosition: 'right',
      };
      const {queryAllByTestId, toJSON} = render(<Button {...rightIconProps} />);
      const leftIconElement = queryAllByTestId('btnIconLeft');
      const rightIconElement = queryAllByTestId('btnIconRight');

      expect(leftIconElement.length).toBe(0);
      expect(rightIconElement.length).toBe(1);
      expect(toJSON()).toMatchSnapshot();
    });

    it('should follow the default fontSize & color of the respective button', () => {
      const {getByTestId, toJSON} = render(<Button {...iconProps} />);
      const iconElement = getByTestId('btnIconLeft');

      expect(iconElement.props.size).toBe(ButtonSizes.variants.md.fontSize);
      expect(iconElement.props.fill).toMatch(
        ButtonVariants.variants.primary.color,
      );
      expect(toJSON()).toMatchSnapshot();
    });

    it('should dynamically change the icon size if iconSize property is passed', () => {
      const myIconProps = {
        testID: 'myIconButton',
        variant: 'primary',
        size: 'md',
        title: 'My Button',
        onPress: mockFn,
        icon: 'car',
        iconPosition: 'left',
        iconSize: 32,
      };
      const {getByTestId, toJSON} = render(<Button {...myIconProps} />);

      const iconElement = getByTestId('btnIconLeft');
      expect(iconElement.props.size).toBe(32);
      expect(toJSON()).toMatchSnapshot();
    });

    it('renders successfully', () => {
      const activeButton = render(<Button {...iconProps} />);
      const {toJSON} = activeButton;

      expect(activeButton).toBeDefined();
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('in loading state', () => {
    const mockFn = jest.fn(() => null);
    const loadingProps = {
      testID: 'myLoadingButton',
      variant: 'primary',
      size: 'md',
      title: 'My Button',
      onPress: mockFn,
      isLoading: true,
    };

    it('should render loading spinner', () => {
      const {toJSON, getByA11yHint} = render(<Button {...loadingProps} />);
      const activityIndicator = getByA11yHint('loading');

      expect(activityIndicator).toBeDefined();
      expect(toJSON()).toMatchSnapshot();
    });

    it('should be in disabled state and not triggering any action', async () => {
      const {toJSON, getByTestId} = render(<Button {...loadingProps} />);
      const btn = getByTestId('myLoadingButton');
      fireEvent.press(btn);

      expect(btn.props.isLoading).toBeTruthy();
      await waitFor(() => expect(mockFn.mock.calls.length).toBe(0));
      expect(toJSON()).toMatchSnapshot();
    });

    it('renders successfully', () => {
      const activeButton = render(<Button {...loadingProps} />);
      const {toJSON} = activeButton;

      expect(activeButton).toBeDefined();
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
