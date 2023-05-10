import { AppState, AppActionTypes, SET_VISIBLE_SPINNER } from './types';

const initialState: AppState = {
  visibleSpinner: false,
};

export const appReducer = (
  state = initialState,
  action: AppActionTypes,
): AppState => {
  switch (action.type) {
    case SET_VISIBLE_SPINNER: {
      return {
        ...state,
        visibleSpinner: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
