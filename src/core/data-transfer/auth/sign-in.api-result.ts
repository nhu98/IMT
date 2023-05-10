import { SessionModel } from '@src/core/models/session/session.model';
import { ApiResult } from '../api-result';

export class SignInApiResult extends ApiResult {
  data: SessionModel;

  constructor() {
    super();
    this.data = new SessionModel();
  }
}
