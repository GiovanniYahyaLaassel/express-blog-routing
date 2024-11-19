const express = require('express');
const router = express.Router();

// Importo l'array dei post
const posts = require('../public/posts');
const { count, error } = require('console');
const send = require('send');

router.get('/',(req, res) => {
    res.json({
        count: posts.length,
        posts: posts,
    });

});

// ottengo un singolo parametro 
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const post = posts[id];

    if(post) {
        res.json(post);
    } else {
        res.status(404).json({error: 'Post non trovato'});
    }
});

// Aggiungo le nuove rotte 
// creo post

router.post('/', (req, res) => {
    console.log('Richiesta POST su /posts');
    res.send('Creazione di un nuovo post');
});

// creo put aggiorno un post esistente
router.put('/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Richiesta PUT su /posts/${id}`);
    res.send(`Aggiornamento del post ${id}`);
});

//creo patch per modificare un parte e non tutta del post 
router.patch('/:id', (req, res) => {
    const id =  req.params.id;
    console.log(`Richiesta PATCH su /posts/${id}`);
    res.send(`Modifica parziale del /post ${id} `);
});

// creo delete per cancellarlo
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Richiesta DELETE su /posts/${id}`);
    res.send(`Cancellazione del /post ${id}`);
});

module.exports = router;
