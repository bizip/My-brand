import jwt from 'jsonwebtoken';
import User from '../models/User';
const requireAuth = async(req, res, next) => {
    const TOken = req.header('Authorization').replace('Bearer ', "");
    const decoded = jwt.verify(TOken, "my own secrete");
    const user = await User.findOne({ _id: decoded.id });
    try {
        if (user) {
            req.user = user;
            next();

        } else {
            // return res.status(401).send({
            //     message: "Please Authenticate"
            // })
            res.status(401).json({
                message: "Your Email or Password is not collect"
            });

        }
    } catch (error) {
        res.status(401).json({
            message: "Your Email or Password is not collect"
        });
    }

}
export default requireAuth;