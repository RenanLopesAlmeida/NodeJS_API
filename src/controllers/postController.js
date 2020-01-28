const Post = require('../models/Post');

module.exports = {
    async index(req, res) {
        const posts = await Post.find();
        return res.json(posts);
    },

    async addAction (req, res) {
        
        const post = new Post({
            title: req.body.title,
            body: req.body.body
        });

        try {
            await post.save();
            res.json(post);
        } catch(error) {
            console.log("Erro ao salvar post: "+error.message);
            
        }
    },

    async edit(req, res){
        const post = await Post.findOne({ slug: req.params.slug });
        res.json(post);
    },

    async editAction(req, res){
        
    }
}