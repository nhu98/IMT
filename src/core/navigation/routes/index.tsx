import { HomeIcon, SettingsIcon } from '@src/assets/icons';
import {
  createAppContainer,
  createSwitchNavigator,
  NavigationContainer,
  NavigationNavigator,
  NavigationProp,
  NavigationState,
} from 'react-navigation';
import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { pxToPercentage } from '../../libs/utils';
import { themes } from '../../themes';
import { AuthNavigator } from './auth';
import { HomeNavigationMap, HomeNavigator } from './home';
import { SettingsNavigationMap, SettingsNavigator } from './settings';
import I18n from '@src/assets/i18n';

const BottomTabNavigator: NavigationNavigator<
  any,
  NavigationProp<NavigationState>
> = createBottomTabNavigator(
  {
    ['tabHome']: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarLabel: I18n.t('layout.tabBarBottom.home'),
      },
    },
    ['tabSettings']: {
      screen: SettingsNavigator,
      navigationOptions: {
        tabBarLabel: I18n.t('layout.tabBarBottom.settings'),
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        switch (navigation.state.routeName) {
          case 'tabHome': {
            return HomeIcon({
              width: pxToPercentage(20),
              height: pxToPercentage(20),
              tintColor,
            });
          }
          case 'tabSettings': {
            return SettingsIcon({
              width: pxToPercentage(20),
              height: pxToPercentage(20),
              tintColor,
            });
          }
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: themes['App Theme']['main-color-1'],
      inactiveTintColor: themes['App Theme']['dark-color-1'],
      labelStyle: {
        fontSize: pxToPercentage(11),
      },
    },
  },
);

const AppNavigator: NavigationContainer = createStackNavigator(
  {
    ['bottom']: BottomTabNavigator,
    ...HomeNavigationMap,
    ...SettingsNavigationMap,
  },
  {
    headerMode: 'screen',
    defaultNavigationOptions: {
      header: null,
    },
    transitionConfig: () => StackViewTransitionConfigs.NoAnimation,
  },
);

const createAppRouter = (container: any): NavigationContainer => {
  return createAppContainer(
    createSwitchNavigator(
      {
        ['auth']: AuthNavigator,
        ['app']: container,
      },
      { initialRouteName: 'auth' },
    ),
  );
};

export const Router: NavigationContainer = createAppRouter(AppNavigator);
