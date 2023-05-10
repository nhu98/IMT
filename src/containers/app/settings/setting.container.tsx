import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Setting } from './setting.component';

export const SettingContainer: React.FunctionComponent<NavigationInjectedProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigationKey = 'SettingContainer';

  return <Setting />;
};
