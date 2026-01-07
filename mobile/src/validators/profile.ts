import {
  validateConfirmPassword,
  validateEmail,
  validateName,
  validatePassword,
} from "./auth-forms";

export const validateProfileForm = (
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
): string[] => [
  ...validateName(name),
  ...validateEmail(email),
  ...validatePassword(password),
  ...validateConfirmPassword(password, confirmPassword),
];
