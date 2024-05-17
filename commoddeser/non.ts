class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CustomError';
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
  }
}

// Usage example:
// throw new CustomError('This is a custom error message.');
