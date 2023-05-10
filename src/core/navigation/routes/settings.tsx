import { SettingContainer } from '@src/containers/app/settings/setting.container';
import {
  NavigationContainer,
  NavigationRouteConfigMap,
} from 'react-navigation';
import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation-stack';
import { TopNavigationOptions } from '../options';

export const SettingsNavigator: NavigationContainer = createStackNavigator(
  {
    ['setting']: SettingContainer,
  },
  {
    defaultNavigationOptions: TopNavigationOptions,
    transitionConfig: () => StackViewTransitionConfigs.NoAnimation,
  },
);

export const SettingsNavigationMap: NavigationRouteConfigMap<any, any> = {
  // Code...
};
