// lib/utils/isBirthdayToday.ts
export function isBirthdayToday(dob?: string) {
  if (!dob) return false;

  const today = new Date();
  const birthDate = new Date(dob);

  return (
    today.getDate() === birthDate.getDate() &&
    today.getMonth() === birthDate.getMonth()
  );
}
