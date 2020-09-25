import User from '../models/User';
import jwt from 'jsonwebtoken';

const maxAge = 3 * 24 * 60 * 60;
async function createToken(id) {
    const accessToken = await jwt.sign({ id: id }, "my own secrete", {
        expiresIn: maxAge
    });
    return accessToken;
}

exports.getSignUp = async(req, res, next) => {
    res.json({
        message: "create an account"
    });

};
exports.postSignUp = async(req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.create({ email, password });
        const token = createToken(user._id);

        res.cookie('jwt', token, {
            httpOnly: true,
            maxage: maxAge * 1000
        });
        res.status(201).json({ user: user._id });
    } catch (error) {
        // console.log(error);
        // res.status(400).send("error, User is not created");
        res.status(401).json({
            message: "Your Email or Password is not collect"
        });
    }

};
exports.getSignIn = (req, res, next) => {
    res.json({
        message: "SignIn please"
    });
};
exports.postSignIn = async(req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password);
        const token = await createToken(user._id);
        res.status(200).json({ user: user._id, accessToken: token });
    } catch (error) {
        res.status(401).json({
            message: "Your Email or Password is not collect"
        });
    }
};