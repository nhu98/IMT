import { SetVisibleSpinnerAction, SET_VISIBLE_SPINNER } from './types';

export const onSetVisibleSpinner = (
  payload: boolean,
): SetVisibleSpinnerAction => ({
  type: SET_VISIBLE_SPINNER,
  payload,
});
