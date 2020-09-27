import jwt from 'jsonwebtoken';
import User from '../models/User';
const requireAuth = async(req, res, next) => {
    try {
        const TOken = req.header('Authorization').replace('Bearer ', "");
        const decoded = jwt.verify(TOken, "my own secrete");
        const user = await User.findOne({ _id: decoded.id });

        if (user) {
            req.user = user;
            next();

        } else {
            res.status(401).json({
                message: "Your Email or Password is not collect"
            });

        }
    } catch (err) {
        res.status(401).json({
            message: "You need to login to do that"
        });
    }

}
export default requireAuth;