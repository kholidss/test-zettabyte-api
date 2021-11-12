export class ApiError {
  constructor(status, success, message) {
    this.status = status
    this.success = success
    this.message = message
  }

  static internal(message) {
    return new ApiError(500, false, message, null)
  }

  static forbidden(message) {
    return new ApiError(403, false, message, null)
  }

  static unauthorized(message) {
    return new ApiError(401, false, message, null)
  }

  static badRequest(message) {
    return new ApiError(400, false, message, null)
  }

  static notFound(message) {
    return new ApiError(404, false, message, null)
  }

  static unprocessableEntity(message) {
    return new ApiError(422, false, message, null)
  }
}
