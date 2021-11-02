'use strict';

module.exports = app => {
    const {STRING, INTEGER} = app.Sequelize;
    let oauth = app.model.define('oauth', {
        access_token: STRING,
        provider: STRING,
        uid: STRING,
        user_id: {type: INTEGER, primaryKey: true}
    }, {
        timestamps: false,
    });
    oauth.associate = (models) => {
        oauth.belongsTo(models.User, {foreignKey: 'user_id'})
    }
    return oauth;
};
