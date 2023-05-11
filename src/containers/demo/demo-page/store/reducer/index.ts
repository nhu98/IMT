import {
  DemoListsActionTypes,
  DemoState,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
} from '@src/containers/demo/demo-page/store/reducer/actionsTypes';

const initialState: DemoState = {
  demolish: [],
  error: '',
};
export const demoReducer = (
  state = initialState,
  action: DemoListsActionTypes,
): DemoState => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        demolish: action.payload,
        error: '',
      };
    }
    case FETCH_DATA_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
