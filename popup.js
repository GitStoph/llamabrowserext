const inputEl = document.getElementById("input");
const outputEl = document.getElementById("output");
const submitBtn = document.getElementById("submit");
const counterEl = document.getElementById("counter");
const spinnerEl = document.getElementById("spinner");

function updateCount() {
  const text = inputEl.value.trim();
  const words = text.split(/\s+/).filter(Boolean).length;
  const chars = text.length;
  counterEl.textContent = `${words} word${words !== 1 ? 's' : ''}, ${chars} char${chars !== 1 ? 's' : ''}`;
}

function fixGrammar() {
  const input = inputEl.value;
  if (!input.trim()) return;
  spinnerEl.style.display = "block";
  outputEl.textContent = "";

  chrome.runtime.sendMessage({ type: "fixGrammar", text: input }, (response) => {
    spinnerEl.style.display = "none";
    if (chrome.runtime.lastError) {
      outputEl.textContent = `Error: ${chrome.runtime.lastError.message}`;
    } else {
      outputEl.textContent = response.result || "No response";
      navigator.clipboard.writeText(response.result).catch(() => {});
    }
  });
}

submitBtn.addEventListener("click", fixGrammar);

inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    fixGrammar();
  }
});

inputEl.addEventListener("input", updateCount);
updateCount();
