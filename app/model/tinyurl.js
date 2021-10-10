'use strict';

module.exports = app => {
    const {STRING, INTEGER, DATE} = app.Sequelize;

    return app.model.define('tinyurl', {
        id: {type: INTEGER, primaryKey: true, autoIncrement: true},
        token: {
            type: STRING(8),
            allowNull: false
        },
        original_url: {
            type: STRING,
            allowNull: false
        },
        create_at: DATE,
        // create_by: STRING
    }, {
        timestamps: false,
    });
};