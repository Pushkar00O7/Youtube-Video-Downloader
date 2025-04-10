// Auto-fill the input with the current tab's YouTube URL
window.onload = function () {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = tabs[0].url;
    if (url.includes("youtube.com/watch")) {
      document.getElementById('urlInput').value = url;
    } else {
      document.getElementById('statusText').innerText = "⚠️ Not a YouTube video page.";
    }
  });
};

document.getElementById('downloadBtn').addEventListener('click', () => {
  const url = document.getElementById('urlInput').value;
  const status = document.getElementById('statusText');

  if (!url || !url.includes("youtube.com")) {
    status.innerText = "⚠️ Please enter a valid YouTube URL";
    return;
  }

  status.innerText = "🔄 Starting download...";

  window.open(`http://localhost:3000/download?url=${encodeURIComponent(url)}`, '_blank');
  status.innerText = "✅ Download started!";
});
