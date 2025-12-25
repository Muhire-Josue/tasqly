export const validateOtp = (otp: string[]): string[] => {
  const errors: string[] = [];

  if (!otp || otp.length !== 4) {
    errors.push("Invalid OTP input.");
    return errors;
  }

  const joined = otp.join("");

  if (!joined.trim()) {
    errors.push("Please enter the OTP code.");
    return errors;
  }

  if (joined.length < 4) {
    errors.push("OTP must be 4 digits.");
  }

  if (!/^\d{4}$/.test(joined)) {
    errors.push("OTP must contain only numbers.");
  }

  return errors;
};
