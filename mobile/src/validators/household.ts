import { validateName } from "./auth-forms";

export const validateSignUpForm = (name: string): string[] => [
  ...validateName(name),
];
