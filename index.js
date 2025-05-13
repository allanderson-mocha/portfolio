const express = require('express');
const app = express();
const PORT = 80;

app.use(express.static('public'));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio running at http://localhost:${PORT}`);
});
