import { hasUnderline } from "./hasUnderline";

export const activeButton = (email: string, password: string): boolean => {
  if (hasUnderline(email) && email.length > 0 && password.length > 0) return false;

  return true;
}