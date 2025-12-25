import {
  validateEmail,
  validateName,
  validatePassword,
  validateTerms,
} from "./auth-forms";

export const validateSignUpForm = (
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  agreedToTerms: boolean,
): string[] => [
  ...validateName(name),
  ...validateEmail(email),
  ...validatePassword(password, confirmPassword),
  ...validateTerms(agreedToTerms),
];
