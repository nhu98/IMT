import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Demo } from '@src/containers/demo/demo-page/demoPage.component';

export const DemoPageContainer: React.FunctionComponent<NavigationInjectedProps> = () => {
  return <Demo />;
};
