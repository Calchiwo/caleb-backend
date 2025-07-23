// submit.js
import { supabase } from './supabase.js';

const form = document.getElementById('name-form');
const input = document.getElementById('name-input');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = input.value.trim();
  if (!name) return alert("Name can't be empty");

  const { error } = await supabase
    .from('submissions')
    .insert([{ name }]);

  if (error) {
    errorMessage.textContent = 'Something went wrong. Try again.';
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
  } else {
    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';
    input.value = ''; // clear the input field
  }
});
