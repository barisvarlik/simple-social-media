export default (sequelize, DataTypes) => {
    const tableName = 'Comment';
    sequelize.define(tableName, {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comment_content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_id: {
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
    })
}