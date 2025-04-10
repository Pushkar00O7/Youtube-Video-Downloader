YouTube Video Downloader (Private Chrome Extension)
This is a private YouTube video downloader Chrome Extension backed by a custom Node.js server. It allows you to download YouTube videos in high quality — hosted by you.


✅ Features
🎬 Download YouTube videos in HD
🧠 Auto-grabs URL from current YouTube tab
🔒 Connects only to your own private server 
🚀 Lightweight & smooth UI
🔧 Easy to self-host
📁 Folder Structure

yt-downloader/
├── backend/            # Node.js server
│   ├── server.js
│   └── package.json
├── chrome-extension/   # Chrome Extension source
│   ├── popup.html
│   ├── popup.js
│   └── manifest.json
└── README.md

🛠️ How to Use This Project
1️⃣ Clone the Repository
git clone https://github.com/your-username/yt-downloader.git
cd yt-downloader


🌐 Step 1: Setup the Backend Server
✅ Requirements
• Node.js v18+ installed
• Internet access (the server fetches from YouTube)


🔧 Install & Run Server
cd backend
npm install
node server.js
Server will start at: http://localhost:3000


🧩 Step 2: Load the Chrome Extension
1. Open chrome://extensions
2. Enable Developer Mode
3. Click Load unpacked
4. Select the chrome-extension/ folder from this repo


📽️ How to Use
1. Go to any YouTube video.
2. Click on the extension icon.
3. It auto-detects the URL and fetches the download from your server.
4. Download starts in high quality.
🧪 Troubleshooting
• Video not downloading?
  - Make sure backend is running
  - Try another YouTube video URL
• Extension not grabbing URL?
  - Refresh the YouTube tab
  - Ensure the extension has permissions

    
⚠️ Disclaimer
This tool is intended for personal/private use only.
Do not use it to violate YouTube’s Terms of Service.

🙌 Credits
• Built using ytdl-core
• UI created using plain HTML/CSS/JS


💡 Want to Contribute?
Feel free to fork the project or suggest improvements!
