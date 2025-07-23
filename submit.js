// submit.js
import { supabase } from './supabase.js';

const form = document.getElementById('name-form');
const input = document.getElementById('name-input');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = input.value.trim();

  if (!name) return alert("Name can't be empty");

  const { error } = await supabase
    .from('submissions')
    .insert([{ name }]);

  if (error) {
    console.error(error);
    alert("Something went wrong. Try again.");
  } else {
    window.location.href = '/success.html';
  }
});
