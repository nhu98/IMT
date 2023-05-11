import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation-stack';
import { NavigationContainer } from 'react-navigation';
import { DemoPageContainer } from '@src/containers/demo/demo-page/demo-page.container';
import { TopNavigationDemoOptions } from '@src/core/navigation/optionsDemo';

export const DemoNavigator: NavigationContainer = createStackNavigator(
  {
    ['demo']: {
      screen: DemoPageContainer,
      navigationOptions: TopNavigationDemoOptions,
    },
  },
  {
    transitionConfig: () => StackViewTransitionConfigs.NoAnimation,
  },
);
