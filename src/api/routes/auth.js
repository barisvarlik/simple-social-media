import { Router } from 'express';
 
import AuthController from '../../controllers/AuthController.js';
 
// api/auth
const authRouter = ({ personRepository }) => {
    const router = Router();
     
    const authController = new AuthController(personRepository);
 
    router.route('/')
        .post(async function (req, res) {
            var result = await authController.login(req.body);
            res.status(result.statusCode).send(result)
        });
    return router;
};
 
 
export default authRouter