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
    const { email, password, fullName } = req.body;
    var isAdmin = false;
    if (req.body.adminCode === 'adminCode123') {
        isAdmin = true;
    }

    try {
        const user = await User.create({ email, password, fullName, isAdmin });

        const token = await createToken(user._id);
        console.log(user);


        res.cookie('jwt', token, {
            httpOnly: true,
            maxage: maxAge * 1000
        });
        res.status(201).json({ token: token });
    } catch (error) {

        res.status(401).json({
            message: error.message
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
        res.status(200).json({ message: `Welcome ${user.fullName}`, accessToken: token });
    } catch (err) {
        res.status(401).json({
            message: "Imvalid email or password"
        });
    }
};

// User profile information
exports.getUserInfo = async(req, res, next) => {
        try {
            const TOken = req.header('Authorization').replace('Bearer ', "");
            const decoded = jwt.verify(TOken, "my own secrete");
            const user = await User.findOne({ _id: decoded.id });
            res.status(200).json({
                message: "Your profile info",
                fullName: user.fullName,
                email: user.email,
                RegisteredSence: user.registeredAt,
                isAdmin: user.isAdmin
            });
        } catch (error) {
            res.status(401).json({ message: "You need to login to do that" });
        }


    }
    // Update user profile information
exports.updateProfile = async(req, res, next) => {
    const fullName = req.body.fullName;
    const email = req.body.email;
    const password = req.body.password;

    try {
        const TOken = req.header('Authorization').replace('Bearer ', "");
        const decoded = jwt.verify(TOken, "my own secrete");
        const user = await User.findOne({ _id: decoded.id });
        User.findById(user._id).then(result => {
                if (!result) {
                    res.status(200).json({ message: "User not found" })
                }
                result.email = email;
                result.fullName = fullName;
                result.password = password;
                return result.save().then(updatedPost => {
                    res.json({
                        message: "Single post is found pascal",
                        data: updatedPost
                    });
                });
            })
            .catch(err => {
                console.log(err);
            });
    } catch (error) {
        res.status(304).json({ message: 'Some thing went wrong profile not updated' });
    }

};