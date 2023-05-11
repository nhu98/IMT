import { combineReducers } from 'redux';
import { sessionReducer } from './session';
import { appReducer } from './app';
import { exampleReducer } from '@src/containers/app/home/example/store/reducer';
import { demoReducer } from '@src/containers/demo/demo-page/store/reducer';

export const rootReducer = combineReducers({
  session: sessionReducer,
  app: appReducer,
  example: exampleReducer,
  demo: demoReducer,
});
