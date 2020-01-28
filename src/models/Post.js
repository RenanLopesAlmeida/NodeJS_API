const mongoose = require('mongoose');
const slug = require('slug');

const postSchema = new mongoose.Schema({
    photo: String,
    title: {
        type: String,
        required: 'O post precisa de um titulo',
        trim: true
    },
    body: {
        type: String,
        required: true,
        trim: true
    },
    slug: String,
    tags: [String]

});

postSchema.pre('save', async function (next) {
    if(this.isModified('title')) {
        this.slug = slug(this.title, {lower:true});

        const slugRegex = new RegExp(`^(${this.slug})((-[0-9]{1,}$)?)$`, 'i');

        const postWithSameSlug = await this.constructor.find({slug: slugRegex});

        if(postWithSameSlug.length > 0){
            this.slug = `${this.slug}-${this.postWithSameSlug.length + 1}`;
        }
    }

    next();
});

module.exports = mongoose.model('Post', postSchema);