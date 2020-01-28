const Post = require('../models/Post');
const slug = require('slug');

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
        
        req.body.slug = slug(req.body.title, { lower: true });
        req.body.tags = req.body.tags.split(',').map(t=>t.trim());

        try{
            const post = await Post.findOneAndUpdate(
                { slug: req.params.slug },
                req.body,
                {
                    new: true,
                    runValidators: true
                }
            );

            return res.json(post);
        } catch(error) {
            console.log('Erro ao editar: ' + error.message);
            //TESTAR SE NO FRONT É REDIRECIONADO A PARTIR DA NOSSA ROTA AQUI
            return res.redirect(`/posts/${req.params.slug}/edit`);
        }
    },

    async deleteAction(req, res) {

        try {
            const post = await Post.findOneAndDelete(
                { "slug": req.params.slug },
            );

            res.json(post);
        } catch(error) {
            console.log('Erro ao deletar: ' + error.message);
            
        }
    }
}