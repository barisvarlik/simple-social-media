import {Sequelize, DataTypes} from "sequelize";
import environment from "../../../config/environment.js";
import Person from './models/Person.js';
import Post from './models/Post.js';
import Comment from './models/Comment.js'

const sequelize = new Sequelize(
    environment.database.database,
    environment.database.username,
    environment.database.password,
    {
        host: environment.database.host,
        dialect: environment.database.dialect
    }
);

//sequelize.import('./models/Person');
Person(sequelize, DataTypes);
Post(sequelize, DataTypes);
Comment(sequelize, DataTypes);

export default sequelize;