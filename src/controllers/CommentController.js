import GetComment from '../core/usecases/comment/GetComment.js';
import CreateComment from '../core/usecases/comment/CreateComment.js';
import DeleteComment from '../core/usecases/comment/DeleteComment.js';
import ListComments from '../core/usecases/comment/ListComments.js';

import ResponseDto from '../core/dtos/ResponseDto.js';

export default class CommentController {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    };

    async getComment(commentId) {
        var response = await GetComment(commentId, this.commentRepository);
        if (response == null) return new ResponseDto("bad request", null, 400);
        return new ResponseDto("Success!", response, 200);
    }

    async deleteComment(commentId) {
        var response = await DeleteComment(commentId, this.commentRepository);
        if (response == null) return new ResponseDto("bad request", null, 400);
        return new ResponseDto(`Comment with id: ${commentId} is deleted`, response, 200);
    }

    async listComments(postId) {
        var response = await ListComments(postId, this.commentRepository);
        if (response == null) return new ResponseDto("bad request", null, 400);
        return new ResponseDto("Success!", response, 200);
    }

    async createComment(req) {
        var response = await CreateComment(req, this.commentRepository);
        if (response == null) return new ResponseDto("bad request", null, 400);
        return new ResponseDto("Comment is created", response, 200);
    }
}