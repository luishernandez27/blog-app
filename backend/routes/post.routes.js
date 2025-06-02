// backend/routes/post.routes.js
const express = require('express');
const router = express.Router();
const Post = require('../models/Post'); // Asegúrate de que existe

// GET /api/posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener posts' });
  }
});

module.exports = router;
