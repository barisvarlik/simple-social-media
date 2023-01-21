//The actual querying happens here.

//import necessary contracts
import PersonRepository from '../../core/contracts/PersonRepository.js';

import sequelize from '../orm/sequelize/sequelize.js';

export default class extends PersonRepository {
    constructor() {
        super();
        this.db = sequelize;
        this.model = this.db.model('Person');
    }

    async get(personId) {
        return await this.model.findOne({
            where: {
                id: personId
            }
        });
    };

    async list () {
        return await this.model.findAll();
    }

    async create(request) {
        return await this.model.create(request);
    }

    async update(personId, request) {
        return await this.model.update(request, {
            where: {
                id: personId
            }
        });
    }

    async delete(personId) {
        return await this.model.destroy({
            where: {
                id: personId
            }
        });
    }

    async login(request) {
        return await this.model.findOne({
            where: {
                email: request.email,
                password: request.password
            }
        });
    }
};