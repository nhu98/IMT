import { OTPConfirmationContainer } from '@src/containers/auth/otp-confirmation/otp-confirmation.container';
import { SignInContainer } from '@src/containers/auth/sign-in/sign-in.container';
import { NavigationContainer } from 'react-navigation';
import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation-stack';
import { TopNavigationOptions } from '../options';

export const AuthNavigator: NavigationContainer = createStackNavigator(
  {
    ['signIn']: {
      screen: SignInContainer,
      navigationOptions: {
        header: null,
      },
    },
    ['otpConfirmation']: OTPConfirmationContainer,
  },
  {
    defaultNavigationOptions: TopNavigationOptions,
    transitionConfig: () => StackViewTransitionConfigs.NoAnimation,
  },
);
