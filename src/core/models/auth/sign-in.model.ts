export class SignInFormDataModel {
  phoneNumber: string;
  otp: string;

  constructor() {
    this.phoneNumber = '';
    this.otp = '';
  }
}

export class SignInReqModel {
  phone_number: string;
  otp: string;

  constructor() {
    this.phone_number = '';
    this.otp = '';
  }
}
