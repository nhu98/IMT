import { SessionModel } from '@src/core/models/session/session.model';
import {
  SET_SESSION,
  SetSessionAction,
  ClearSessionAction,
  CLEAR_SESSION,
} from './types';

export const onSetSession = (payload: SessionModel): SetSessionAction => ({
  type: SET_SESSION,
  payload,
});

export const onClearSession = (): ClearSessionAction => ({
  type: CLEAR_SESSION,
});
