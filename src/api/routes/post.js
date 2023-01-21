import { Router } from "express";

import PostController from '../../controllers/PostController.js';

const postRouter = ({ postRepository }) => {
    const router = Router();
    const postController = new PostController(postRepository);

    router.route('/')
        .get(async function (req, res) {
            var result = await postController.listPosts();
            res.status(result.statusCode).send(result)
        })
        .post(async function (req, res) {
            var result = await postController.createPost(req.body);
            res.status(result.statusCode).send(result)
        })

    router.route('/:postId')
        .get(async function (req, res) {
            var result = await postController.getPost(req.params.postId);
            res.status(result.statusCode).send(result)
        })
        .delete(async function (req, res) {
            var result = await postController.deletePost(req.params.postId);
            res.status(result.statusCode).send(result)
        })

    return router;
}

export default postRouter;