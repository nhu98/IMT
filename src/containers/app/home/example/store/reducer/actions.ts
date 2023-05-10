import { ExampleModel } from '@src/core/models/example/example.model';
import {
  GetExamplesSuccessAction,
  GetExampleSuccessAction,
  GET_EXAMPLES_SUCCESS,
  GET_EXAMPLE_SUCCESS,
} from './types';

export const onGetExamplesSuccess = (
  payload: ExampleModel[],
): GetExamplesSuccessAction => ({
  type: GET_EXAMPLES_SUCCESS,
  payload,
});

export const onGetExampleSuccess = (
  payload: ExampleModel,
): GetExampleSuccessAction => ({
  type: GET_EXAMPLE_SUCCESS,
  payload,
});
