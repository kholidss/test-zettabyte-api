export class BaseResponse {
  constructor(code, success, message, data, meta) {
    this.code = code;
    this.success = success;
    this.message = message;
    this.data = data;
    this.meta = meta;
  }

  static success(message, data) {
    return new BaseResponse(200, true, message, data);
  }

  static successCreate(message, data) {
    return new BaseResponse(201, true, message, data);
  }

  static error(code, success, message, data) {
    return new BaseResponse(code, success, message, null);
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
