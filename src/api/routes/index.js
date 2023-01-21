import { Router } from 'express';
import checkAuth from '../middleware/checkAuth.js';
import auth from './auth.js';
import persons from './person.js';
import post from './post.js';
import comment from './comment.js';
 
const apiRouter = (serviceLocator) => {
    const routes = Router();
 
    routes.use('/auth', auth(serviceLocator));
    // Kullanıcı doğrulama işlemi burada middleware ile yapılıyor.
    routes.use('/', checkAuth);
 
    routes.use('/persons', persons(serviceLocator));
    routes.use('/posts', post(serviceLocator));
    routes.use('/posts/:postId/comments', comment(serviceLocator));
 
    return routes;
};
 
 
export default apiRouter;