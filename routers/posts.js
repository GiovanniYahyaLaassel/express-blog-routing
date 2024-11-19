const express = require('express');
const router = express.Router();

// Importo l'array dei post
const posts = require('../public/posts');
const { count } = require('console');

router.get('/',(req, res) => {
    res.json({
        count: posts.length,
        posts: posts,
    });

});
