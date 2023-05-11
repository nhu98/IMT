import { YearItem } from '@src/core/models/demo/demo.model';

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export interface DemoState {
  demolish: YearItem[];
  error: string;
}

export interface GetDemoListsSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: YearItem[];
}

export interface GetDemoListsFailureAction {
  type: typeof FETCH_DATA_FAILURE;
  payload: string;
}

export type DemoListsActionTypes =
  | GetDemoListsSuccessAction
  | GetDemoListsFailureAction;
