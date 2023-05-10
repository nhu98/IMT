import { SessionModel } from '@src/core/models/session/session.model';
import {
  SessionState,
  SessionActionTypes,
  SET_SESSION,
  CLEAR_SESSION,
} from './types';

const initialState: SessionState = {
  loggedIn: false,
  session: new SessionModel(),
};

export const sessionReducer = (
  state = initialState,
  action: SessionActionTypes,
): SessionState => {
  switch (action.type) {
    case SET_SESSION: {
      return {
        ...state,
        loggedIn: true,
        session: action.payload,
      };
    }
    case CLEAR_SESSION: {
      return {
        ...state,
        loggedIn: false,
        session: new SessionModel(),
      };
    }
    default: {
      return state;
    }
  }
};
