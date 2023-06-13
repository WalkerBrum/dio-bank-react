export const hasUnderline = (email: string): boolean => {
  for (let i = 1; i < email.length - 1; i++) {
    if (email[i] === '@') return true;
  }

  return false;
}