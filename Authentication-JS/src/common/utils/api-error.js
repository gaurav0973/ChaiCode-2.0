class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.name = "ApiError";
    this.isOperational = true; // baad me dekhenge
    Error.captureStackTrace(this, this.constructor);
  }
  static badRequest(message = "Bad Request") {
    return new ApiError(400, message);
  }
  static unauthorised(message = "Unauthorised") {
    return new ApiError(401, message);
  }
  static conflict(message = "Conflict - Data already exists") {
    return new ApiError(409, message);
  }
  static internal(message = "Internal Server Error") {
    return new ApiError(500, message);
  }
}
export default ApiError;
