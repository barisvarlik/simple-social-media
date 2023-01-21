import { Router } from "express";

import CommentController from "../../controllers/CommentController.js";

const commentRouter = ({ commentRepository }) => {
    const router = Router();
    const commentController = new CommentController(commentRepository);

    router.route('/')
        .get(async function (req, res) {
            var result = await commentController.listComments(req.params.postId);
            res.status(result.statusCode).send(result)
        })
        .post(async function (req, res) {
            var result = await commentController.createComment({
                id: req.body.id,
                commentContent: req.body.commentContent,
                postId: req.params.postId,
                personId: req.body.personId
            });
            res.status(result.statusCode).send(result)
        })

    router.route('/:commentId')
        .get(async function (req, res) {
            var result = await commentController.getComment(req.params.commentId);
            res.status(result.statusCode).send(result)
        })
        .delete(async function (req, res) {
            var result = await commentController.deleteComment(req.params.commentId);
            res.status(result.statusCode).send(result)
        })

    return router;
}

export default commentRouter;