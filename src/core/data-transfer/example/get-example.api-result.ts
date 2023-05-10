import { ExampleModel } from '@src/core/models/example/example.model';
import { ApiResult } from '../api-result';

export class GetExampleApiResult extends ApiResult {
  data: ExampleModel;

  constructor() {
    super();
    this.data = new ExampleModel();
  }
}
