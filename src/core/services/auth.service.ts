import { SignInApiResult } from '../data-transfer/auth/sign-in.api-result';
import { SignInReqModel } from '../models/auth/sign-in.model';
import ApiService from './api.service';

export default class AuthService extends ApiService {
  public signIn(data: SignInReqModel) {
    return this.apiPost<SignInApiResult>('/auth/login', data, {}, false);
  }
}
