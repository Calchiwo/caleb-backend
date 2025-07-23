document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("name-form");
  const nameInput = document.getElementById("name-input");
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form redirect

    const name = nameInput.value.trim();
    if (!name) return;

    // Hide previous messages
    successMessage.style.display = "none";
    errorMessage.style.display = "none";

    try {
      const response = await fetch("https://caleb-backend.netlify.app/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
      });

      const result = await response.json();

      if (response.ok) {
        successMessage.innerText = "✅ Submitted successfully!";
        successMessage.style.display = "block";
        nameInput.value = "";
      } else {
        errorMessage.innerText = `❌ Failed: ${result?.error || "Try again."}`;
        errorMessage.style.display = "block";
      }
    } catch (error) {
      console.error("Error:", error);
      errorMessage.innerText = "❌ Something went wrong.";
      errorMessage.style.display = "block";
    }
  });
});
