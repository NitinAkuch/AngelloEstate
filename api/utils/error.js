export const errorHandler = (statusCode, message) => {
  console.log("In the Error Handler!");
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
