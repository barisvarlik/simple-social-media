import CommentRepository from "../../core/contracts/CommentRepository.js";

import sequelize from '../orm/sequelize/sequelize.js';

export default class extends CommentRepository {
    constructor() {
        super();
        this.db = sequelize;
        this.model = this.db.model('Comment');
    }

    async get(commentId) {
        return await this.model.findOne({
            where: {
                id: commentId
            }
        });
    }

    async list(postId) {
        return await this.model.findAll({
            where: {
                post_id: postId
            }
        });
    }

    async create(request) {
        return await this.model.create(request);
    }

    async delete(commentId) {
        return await this.model.destroy({
            where: {
                id: commentId
            }
        });
    }
}