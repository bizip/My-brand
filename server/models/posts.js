import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Post', postSchema);