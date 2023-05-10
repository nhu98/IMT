import { ExampleModel } from '@src/core/models/example/example.model';
import { ApiResult } from '../api-result';

export class GetExamplesApiResult extends ApiResult {
  data: ExampleModel[];

  constructor() {
    super();
    this.data = [];
  }
}

// export class GetExamplesApiResult extends ApiResult {
//   data: ExamplePagingModel;

//   constructor() {
//     super();
//     this.data = new ExamplePagingModel();
//   }
// }
