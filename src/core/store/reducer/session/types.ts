import { SessionModel } from '@src/core/models/session/session.model';

// Describing the shape of the session's slice of state
export interface SessionState {
  loggedIn: boolean;
  session: SessionModel;
}

// Describing the different ACTION NAMES available
export const SET_SESSION = 'SET_SESSION';
export const CLEAR_SESSION = 'CLEAR_SESSION';

export interface SetSessionAction {
  type: typeof SET_SESSION;
  payload: SessionModel;
}

export interface ClearSessionAction {
  type: typeof CLEAR_SESSION;
}

export type SessionActionTypes = SetSessionAction | ClearSessionAction;
