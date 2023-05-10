export class ApiResult {
  success: boolean;
  message?: string;
  error_code?: number;
  data?: any;

  constructor() {
    this.success = false;
  }
}
