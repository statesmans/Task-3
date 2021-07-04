class NotFoundError extends Error {
  constructor(message) {
    super();
    this.status = 404;
    this.code = 'NOT_FOUND';
    this.message = message || 'Not found';
  }
}

module.exports = NotFoundError;