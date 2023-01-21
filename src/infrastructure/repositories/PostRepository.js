import PostRepository from '../../core/contracts/PostRepository.js';

import sequelize from '../orm/sequelize/sequelize.js';

export default class extends PostRepository {
    constructor() {
        super();
        this.db = sequelize;
        this.model = this.db.model('Post');
    }

    async get(postId) {
        return await this.model.findOne({
            where: {
                id: postId
            }
        });
    };

    async list () {
        return await this.model.findAll();
    };

    async create(request) {
        return await this.model.create(request);
    };

    async delete(postId) {
        return await this.model.destroy({
            where: {
                id: postId
            }
        });
    };
};