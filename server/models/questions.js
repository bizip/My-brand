import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const questionSchema = new Schema({
    fullName: {
        type: String,
        required: true

    },
    email: {
        type: String

    },
    subject: {
        type: String

    },
    message: {
        type: String

    },
    createdDate: {
        type: Date,
        default: Date.now
    }

});
module.exports = mongoose.model('Question', questionSchema);