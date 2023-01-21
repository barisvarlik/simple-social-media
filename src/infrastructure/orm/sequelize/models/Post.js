export default (sequelize, DataTypes) => {
    const tableName = "Post";
    sequelize.define(tableName, {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        likeNum: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        person_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: tableName,
        timestamps: true
    });
};