import { supabase } from './supabase.js';

const form = document.getElementById('name-form');
const input = document.getElementById('name-input');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = input.value.trim();
    console.log("Submitting name:", name);

    if (!name) {
      alert("Name can't be empty");
      return;
    }

    try {
      const { data, error } = await supabase
        .from('submissions')
        .insert([{ name }]);

      if (error) {
        console.error('Supabase insert error:', error);
        alert("Something went wrong. Try again.");
        return;
      }

      console.log('Insert success:', data);
      window.location.href = 'success.html';
    } catch (err) {
      console.error('Unexpected error:', err);
      alert("Unexpected error. Check console.");
    }
  });
} else {
  console.warn('Form element not found on page.');
}
