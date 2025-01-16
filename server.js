import express from 'express';

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const NAME = process.env.NAME;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});
app.get('/page1', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/page1.html'));
});
app.get('/page2', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/page2.html'));
});

app.get('/about-us', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/about-us.html'))
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});