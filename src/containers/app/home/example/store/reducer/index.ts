import { ExampleModel } from '@src/core/models/example/example.model';
import {
  ExampleActionTypes,
  ExampleState,
  GET_EXAMPLES_SUCCESS,
  GET_EXAMPLE_SUCCESS,
} from './types';

const initialState: ExampleState = {
  examples: [],
  example: new ExampleModel(),
};

export const exampleReducer = (
  state = initialState,
  action: ExampleActionTypes,
): ExampleState => {
  switch (action.type) {
    case GET_EXAMPLES_SUCCESS: {
      return {
        ...state,
        examples: action.payload,
      };
    }
    case GET_EXAMPLE_SUCCESS: {
      return {
        ...state,
        example: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
