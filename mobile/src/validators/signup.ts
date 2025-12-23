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

const validateName = (name: string): string[] => {
  const errors: string[] = [];
  if (name.trim() === "") errors.push("Name is required");
  else if (name.trim().length < 2)
    errors.push("Name must be at least 2 characters");
  else if (name.trim().length > 50)
    errors.push("Name must be 50 characters or less");
  return errors;
};

const validateEmail = (email: string): string[] => {
  const errors: string[] = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.trim() === "") errors.push("Email is required");
  else if (!emailRegex.test(email.trim()))
    errors.push("Please enter a valid email");
  return errors;
};

const validatePassword = (password: string, confirm: string): string[] => {
  const errors: string[] = [];
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{8,}$/;

  if (!password) errors.push("Password is required");
  else if (!passwordRegex.test(password))
    errors.push(
      "Password must be 8+ characters, include uppercase, digit and symbol",
    );

  if (!confirm) errors.push("Please confirm your password");
  else if (confirm !== password) errors.push("Passwords do not match");

  return errors;
};

const validateTerms = (agreed: boolean): string[] =>
  !agreed ? ["You must agree with the Terms & Conditions"] : [];
