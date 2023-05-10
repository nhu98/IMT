import { AccountModel } from '../account/account.model';

export class SessionModel {
  token: string;
  account: AccountModel;

  constructor() {
    this.token = '';
    this.account = new AccountModel();
  }
}
