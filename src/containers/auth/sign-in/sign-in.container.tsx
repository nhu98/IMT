import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { SignIn } from './sign-in.component';

export const SignInContainer: React.FunctionComponent<NavigationInjectedProps> = (
  props,
) => {
  const navigationKey = 'SignInContainer';

  const onNavigateToOTPScreen = () => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'otpConfirmation',
    });
  };

  return <SignIn onNavigateToOTPScreen={onNavigateToOTPScreen} />;
};
