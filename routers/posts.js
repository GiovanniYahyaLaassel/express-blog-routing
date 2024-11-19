const express = require('express');
const router = express.Router();

// Importo l'array dei post
const posts = require('../public/posts');
const { count, error } = require('console');

router.get('/',(req, res) => {
    res.json({
        count: posts.length,
        posts: posts,
    });

});

// ottengo un singolo parametro 
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 5);
    const post = posts[id];

    if(post) {
        res.json(post);
    } else {
        res.status(404).json({error: 'Post non trovato'});
    }
});

module.exports = router;
