const postController = require('../controllers/postController');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('HOME 2.0');
});

router.get('/url', (req, res)=>{
    res.json(req.url);
});

router.get('/posts', postController.view);
router.post('/posts/add', postController.addAction);

router.get('/posts/:slug/edit', postController.edit);
router.put('/posts/:slug/edit', postController.editAction);

router.get('/posts/:slug/delete', postController.deleteAction);

module.exports = router;