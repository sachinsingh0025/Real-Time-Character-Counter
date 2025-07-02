const textarea = document.getElementById("input");
const total = document.getElementById("total");
const remaining = document.getElementById("remaining");
const maxLength = 50;

textarea.addEventListener("input", () => {
  const currentLength = textarea.value.length;
  total.textContent = currentLength;
  remaining.textContent = maxLength - currentLength;

  // Optional: prevent input beyond max limit
  if (currentLength >= maxLength) {
    textarea.value = textarea.value.substring(0, maxLength);
  }
});
