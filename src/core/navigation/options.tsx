import React from 'react';
import { NavigationParams, NavigationInjectedProps } from 'react-navigation';
import {
  onGetCurrentRouteState,
  isRootRoute,
  onGetCurrentRouteIndex,
} from './util';
import { KEY_NAVIGATION_BACK } from './constants';
import { TopNavigationBar } from './components/top-navigation-bar.component';
import { ArrowIOSBackIcon } from '@src/assets/icons';
import { pxToPercentage } from '../libs/utils';
import I18n from '@src/assets/i18n';

export type TopNavigationElement = React.ReactElement<any>;
export type BottomNavigationElement = React.ReactElement<any>;

export interface TopNavigationParams extends NavigationParams {
  header: (props: NavigationInjectedProps) => TopNavigationElement | null;
  gesturesEnabled: boolean;
}

export interface BottomNavigationParams extends NavigationParams {
  bottomNavigation: (
    props: NavigationInjectedProps,
  ) => BottomNavigationElement | null;
}

const MainTopNavigationParams = (): TopNavigationParams => ({
  header: (props: NavigationInjectedProps): TopNavigationElement => {
    // @ts-ignore (private API)
    const { routeName } = onGetCurrentRouteState(props.navigation);
    const index: number = onGetCurrentRouteIndex(props.navigation);

    const renderArrowsBack = () =>
      ArrowIOSBackIcon({
        width: pxToPercentage(20),
        height: pxToPercentage(20),
      });

    return (
      <TopNavigationBar
        {...props}
        title={I18n.t(`layout.header.${routeName}`)}
        backIcon={isRootRoute(index) ? renderArrowsBack : undefined}
        onBackPress={() => {
          props.navigation.goBack(KEY_NAVIGATION_BACK);
        }}
      />
    );
  },
  gesturesEnabled: false,
});

export const TopNavigationOptions: NavigationParams = MainTopNavigationParams();
