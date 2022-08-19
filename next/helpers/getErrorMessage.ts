export const getErrorMessage = (error) => {
  const errorName = error.error;

  let message = error.body.message;
  if (Array.isArray(message)) message = error.body.message.join(".");
  if (!message) message = errorName;
  return message;
};
