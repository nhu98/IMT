import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { OTPConfirmation } from './otp-confirmation.component';

export const OTPConfirmationContainer: React.FunctionComponent<NavigationInjectedProps> = (
  props,
) => {
  const navigationKey = 'OTPConfirmationContainer';

  const onNavigateToAppScreen = () => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'app',
    });
  };

  return <OTPConfirmation onNavigateToAppScreen={onNavigateToAppScreen} />;
};
