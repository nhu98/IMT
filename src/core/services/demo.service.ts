import { demoDatasource } from '@src/core/data/demo';

export default class DemoService {
  public getDemoLists() {
    return demoDatasource;
  }
}
