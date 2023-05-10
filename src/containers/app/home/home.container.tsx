import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Home } from './home.component';

export const HomeContainer: React.FunctionComponent<NavigationInjectedProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigationKey = 'HomeContainer';

  return <Home />;
};
