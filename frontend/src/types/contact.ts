export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const emptyContactForm: ContactFormData = {
  name: '',
  email: '',
  message: '',
};
