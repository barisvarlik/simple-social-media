import GetPost from '../core/usecases/post/GetPost.js';
import DeletePost from '../core/usecases/post/DeletePost.js';
import ListPosts from '../core/usecases/post/ListPosts.js';
import CreatePost from '../core/usecases/post/CreatePost.js';

import ResponseDto from '../core/dtos/ResponseDto.js';

export default class PostController {
    constructor(postRepository) {
        this.postRepository = postRepository;
    };

    async getPost(postId) {
        var response = await GetPost(postId, this.postRepository);
        if (response == null) return new ResponseDto("bad request", null, 400);
        return new ResponseDto("", response, 200);
    }

    async deletePost(postId) {
        var response = await DeletePost(postId, this.postRepository);
        if (response == null) return new ResponseDto("bad request", null, 400);
        return new ResponseDto("", response, 200);
    }

    async listPosts() {
        var response = await ListPosts(this.postRepository);
        if (response == null) return new ResponseDto("bad request", null, 400);
        return new ResponseDto("", response, 200);
    }

    async createPost(req) {
        var response = await CreatePost(req, this.postRepository);
        if (response == null) return new ResponseDto("bad request", null, 400);
        return new ResponseDto("", response, 200);
    }
}