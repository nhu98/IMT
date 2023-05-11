import { NavigationInjectedProps, NavigationParams } from 'react-navigation';
import React from 'react';
import {
  TopNavigationElement,
  TopNavigationParams,
} from '@src/core/navigation/options';
import { TopBarDemo } from '@src/core/navigation/components/top-bar-demo.component';

const MainTopNavigationDemoParams = (): TopNavigationParams => ({
  header: (props: NavigationInjectedProps): TopNavigationElement => {
    return <TopBarDemo {...props} title={'Your Case'} />;
  },
  gesturesEnabled: false,
});
export const TopNavigationDemoOptions: NavigationParams = MainTopNavigationDemoParams();
