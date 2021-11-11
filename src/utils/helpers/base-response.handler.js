export class BaseResponse {
  constructor(code, success, message, data, meta) {
    this.code = code;
    this.success = success;
    this.message = message;
    this.data = data;
    this.meta = meta;
  }

  static success(code, success, message, data) {
    return new BaseResponse(code, success, message, data);
  }

  static error(code, success, message) {
    return new BaseResponse(code, success, message, undefined);
  }

  static pagination(
    code,
    success,
    message,
    page,
    total,
    take,
    total_page,
    data
  ) {
    const res = new BaseResponse(code, success, message, data);

    res.meta = {
      current_page: page,
      total_data: total,
      per_page: take,
      total_page,
    };

    return res;
  }
}
