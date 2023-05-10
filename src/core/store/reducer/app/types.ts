// Describing the shape of the app's slice of state
export interface AppState {
  visibleSpinner: boolean;
}

// Describing the different ACTION NAMES available
export const SET_VISIBLE_SPINNER = 'SET_VISIBLE_SPINNER';

export interface SetVisibleSpinnerAction {
  type: typeof SET_VISIBLE_SPINNER;
  payload: boolean;
}

export type AppActionTypes = SetVisibleSpinnerAction;
