import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
} from "./auth-forms";

export const validateResetPasswordForm = (
  email: string,
  password: string,
  confirmPassword: string,
): string[] => [
  ...validateEmail(email),
  ...validatePassword(password),
  ...validateConfirmPassword(password, confirmPassword),
];
