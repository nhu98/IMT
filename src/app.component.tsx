import 'reflect-metadata';
import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/en';

import * as React from 'react';
import { persistor, store } from './core/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { RootSiblingParent } from 'react-native-root-siblings';
import { LogBox } from 'react-native';
import { useEffect } from 'react';
import { DynamicStatusBar, Spinner } from './components';
import { Router } from './core/navigation/routes';
import { NavigationService } from './core/navigation/service';
import SplashScreen from 'react-native-splash-screen';

const App: React.FunctionComponent = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['']);

    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <RootSiblingParent>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <DynamicStatusBar barStyle="dark-content" />
          <Spinner />
          <Router
            ref={(navigatorRef) => {
              if (navigatorRef) {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }
            }}
          />
        </PersistGate>
      </Provider>
    </RootSiblingParent>
  );
};

export default App;
