chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "doShit") {
    fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3",
        prompt: `You are a helpful assistant. Keep your responses super concise:\n\n"${message.text}"`,
        stream: false
      })
    })
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then(data => {
      sendResponse({ result: data.response.trim() });
    })
    .catch(err => {
      sendResponse({ result: `Error: ${err.message}` });
    });

    return true;
  }
});
