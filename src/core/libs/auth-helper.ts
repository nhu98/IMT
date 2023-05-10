import { store } from '../store';

export const isLoggedIn = (): boolean => {
  return store.getState().session.loggedIn;
};
