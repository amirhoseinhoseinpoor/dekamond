export const validatePhone = (phone: string): boolean => {
  const iranPhoneRegex = /^(?:\+98|0098|98|0)?9\d{9}$/;
  return iranPhoneRegex.test(phone.trim());
};