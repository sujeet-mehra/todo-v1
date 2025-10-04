const successResponse = (message, data) => {
  return {
    success: true,
    message: message,
    data: data,
    error: {},
  };
};

module.exports = successResponse;
