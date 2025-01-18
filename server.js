import express from 'express';

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const NAME = process.env.NAME;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const title = 'Home Page';
    const content = '<h1>Welcome to the Home Page</h1>';
    res.render('index', {title, content});
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});