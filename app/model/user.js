'use strict';

module.exports = app => {
    const {STRING, INTEGER, DATE} = app.Sequelize;
    let user = app.model.define('user', {
        unique_id: STRING,
        provider: STRING,
        user_id: {type: INTEGER, primaryKey: true, autoIncrement: true},
        user_name: STRING,
        user_email: STRING,
        user_avatar: STRING,
        register_at: DATE
    }, {
        timestamps: false,
    });
    user.associate = (models) => {
        user.hasOne(models.oauth, {foreignKey: 'user_id'})
    };
    return user;
};