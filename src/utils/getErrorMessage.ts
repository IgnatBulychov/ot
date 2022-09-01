import errors from "../constants/errors";

export const getErrorMessage = (err: keyof typeof errors) => {
  return errors[err] || "Что-то пошло не так...";
};
