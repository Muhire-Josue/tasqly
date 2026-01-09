import { validateName } from "./auth-forms";

export const validateHouseholdForm = (name: string): string[] => [
  ...validateName(name),
];
