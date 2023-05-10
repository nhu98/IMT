import { PagingModel } from '../paging.model';

export class ExampleModel {
  value: number;

  constructor() {
    this.value = 0;
  }
}

export class ExamplePagingModel extends PagingModel {
  items: ExampleModel[];

  constructor() {
    super();
    this.items = [];
  }
}
