import { verify } from 'jsonwebtoken';
 
import constants  from '../../config/constants.js';
 
export default (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
 
        verify(token, constants.JWT.SECRET_KEY, (err, user) => {
            if (err) {
                //403 means forbidden
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
 
    } else {
        //401 means unauthorized
        res.sendStatus(401);
    }
};