import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const { isEmail } = require('validator');
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validator: [isEmail, "Please enter the valid email"]
    },
    fullName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    registeredAt: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

// fire the function before doc save to dataase
userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//static method to login user
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });

    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw error("Incorect password");
    }
    throw error("invalid email");
}
const User = mongoose.model('user', userSchema);
module.exports = User;