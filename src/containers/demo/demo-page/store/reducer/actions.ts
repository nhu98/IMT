import { YearItem } from '@src/core/models/demo/demo.model';
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
  GetDemoListsFailureAction,
  GetDemoListsSuccessAction,
} from '@src/containers/demo/demo-page/store/reducer/actionsTypes';

export const onGetDemoListsSuccess = (
  payload: YearItem[],
): GetDemoListsSuccessAction => ({
  type: FETCH_DATA_SUCCESS,
  payload,
});

export const onGetDemoListsFailure = (
  error: string,
): GetDemoListsFailureAction => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
