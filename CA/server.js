
const express = require('express');
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/analyze', (req, res) => {

    const filePath = path.join(__dirname, 'book.txt');

    const data = fs.readFileSync(filePath,'utf8');

    const characters = data.length;
    const words = data.split(/\s+/).length;
    const lines = data.split('\n').length;

    const stats = fs.statSync(filePath);
    const size = stats.size / 1024;

    const gzip = zlib.createGzip();
    const input = fs.createReadStream(filePath);
    const outputPath = path.join(__dirname, 'book.txt.gz');
    const output = fs.createWriteStream(outputPath);

    input.pipe(gzip).pipe(output);

    output.on('finish', () => {

        const cstats = fs.statSync(outputPath);
        const csize = cstats.size / 1024;

        res.send(`
        <h1>Text Analyzer & Compressor</h1>

        <p><b>File Analyzed:</b> book.txt</p>
        <p>Words: ${words}</p>
        <p>Lines: ${lines}</p>
        <p>Characters: ${characters}</p>
        <p>Compressed File: book.txt.gz</p>
        <p>Compressed Size: ${csize.toFixed(2)} KB</p>

        <a href="/">Back</a>
        `);

    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
