import { catchHandle } from '@src/core/libs/catch-helper';
import ExampleService from '@src/core/services/example.service';
import { ThunkActionTypes } from '@src/core/store/thunk/types';
import { onGetExamplesSuccess, onGetExampleSuccess } from '../reducer/actions';

export const onThunkGetExamples = (): ThunkActionTypes => async (dispatch) => {
  const exampleService = new ExampleService();

  try {
    const res = await exampleService.getExamples();

    if (res.success) {
      dispatch(onGetExamplesSuccess(res.data));
    } else {
      throw new Error(res.message);
    }
  } catch (e) {
    catchHandle(e);
  }
};

export const onThunkGetExample = (
  exampleID: number,
): ThunkActionTypes => async (dispatch) => {
  const exampleService = new ExampleService();

  try {
    const res = await exampleService.getExample(exampleID);

    if (res.success) {
      dispatch(onGetExampleSuccess(res.data));
    } else {
      throw new Error(res.message);
    }
  } catch (e) {
    catchHandle(e);
  }
};
