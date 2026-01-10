import { validateName } from "./auth-forms";

export const validateHouseForm = (name: string): string[] => [
  ...validateName(name),
];
