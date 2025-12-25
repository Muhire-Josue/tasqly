import { validateEmail, validatePassword } from "./auth-forms";

export const validateSignInForm = (
  email: string,
  password: string,
): string[] => [...validateEmail(email), ...validatePassword(password)];
