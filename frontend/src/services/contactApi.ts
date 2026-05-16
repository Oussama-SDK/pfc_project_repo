import type { ContactFormData } from '../types/contact';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function submitContactMessage(contact: ContactFormData) {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contact),
  });

  if (!response.ok) {
    throw new Error('Unable to submit contact message.');
  }

  return response.json();
}
