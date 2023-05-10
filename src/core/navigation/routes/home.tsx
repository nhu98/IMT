import { HomeContainer } from '@src/containers/app/home/home.container';
import {
  NavigationContainer,
  NavigationRouteConfigMap,
} from 'react-navigation';
import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation-stack';
import { TopNavigationOptions } from '../options';

export const HomeNavigator: NavigationContainer = createStackNavigator(
  {
    ['home']: HomeContainer,
  },
  {
    defaultNavigationOptions: TopNavigationOptions,
    transitionConfig: () => StackViewTransitionConfigs.NoAnimation,
  },
);

export const HomeNavigationMap: NavigationRouteConfigMap<any, any> = {
  // Code...
};
