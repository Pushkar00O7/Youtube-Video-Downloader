chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "download") {
      const { url, quality, audioOnly, isPlaylist } = message;
  
      const apiUrl = `http://localhost:3000/download?url=${encodeURIComponent(url)}&audioOnly=${audioOnly}&quality=${encodeURIComponent(quality)}&playlist=${isPlaylist}`;
  
      chrome.downloads.download({
        url: apiUrl,
        filename: audioOnly ? "audio.zip" : (isPlaylist ? "playlist.zip" : "video.mp4")
      });
    }
  });
  