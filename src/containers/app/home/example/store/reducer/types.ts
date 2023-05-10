import { ExampleModel } from '@src/core/models/example/example.model';

export interface ExampleState {
  examples: ExampleModel[];
  example: ExampleModel;
}

export const GET_EXAMPLES_SUCCESS = 'GET_EXAMPLES_SUCCESS';
export const GET_EXAMPLE_SUCCESS = 'GET_EXAMPLE_SUCCESS';

export interface GetExamplesSuccessAction {
  type: typeof GET_EXAMPLES_SUCCESS;
  payload: ExampleModel[];
}

export interface GetExampleSuccessAction {
  type: typeof GET_EXAMPLE_SUCCESS;
  payload: ExampleModel;
}

export type ExampleActionTypes =
  | GetExamplesSuccessAction
  | GetExampleSuccessAction;
