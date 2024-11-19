const express = require('express');

const app = express();

app.use(express.json());

// Importo il router
const postRouter = require('./routers/posts');

app.use(express.static('public'));

// registro il router per il percorso post
app.use('/posts', postRouter);

app.listen(3000, () => {
    console.log('Server avviato su http://localhost:3000')
});