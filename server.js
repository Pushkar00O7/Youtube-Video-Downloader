const express = require('express');
const cors = require('cors');
const ytdl = require('@distube/ytdl-core');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.get('/download', async (req, res) => {
    const videoURL = req.query.url;
    if (!videoURL || !ytdl.validateURL(videoURL)) {
        return res.status(400).send('Invalid YouTube URL');
    }

    try {
        const info = await ytdl.getInfo(videoURL);
        const title = info.videoDetails.title.replace(/[^\w\s]/gi, '');
        res.header('Content-Disposition', `attachment; filename="${title}.mp4"`);

        ytdl(videoURL, {
            filter: 'audioandvideo',
            quality: 'highest'
        }).pipe(res);

    } catch (err) {
        console.error('Download Error:', err.message);
        res.status(500).send('Failed to download. Please try again later.');
    }
});

app.listen(3000, () => console.log('✅ Server running on port 3000'));
