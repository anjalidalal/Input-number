const numInput = document.getElementById("numInput");
const output = document.getElementById("output");

numInput.addEventListener("input", () => {
  const num = parseInt(numInput.value);

  if (num <= 0) {
    output.textContent = "Enter a positive value";
  } else if (num % 2 === 0) {
    const nextEvens = [num + 2, num + 4, num + 6];
    output.textContent = `Next 3 even numbers: ${nextEvens.join(", ")}`;
  } else {
    const nextOdds = [num + 2, num + 4, num + 6];
    output.textContent = `Next 3 odd numbers: ${nextOdds.join(", ")}`;
  }
});
