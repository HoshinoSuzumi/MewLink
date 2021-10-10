'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const {INTEGER, STRING, DATE} = Sequelize;
        await queryInterface.createTable('users', {
            unique_id: STRING,
            provider: STRING,
            user_id: {type: INTEGER, primaryKey: true, autoIncrement: true},
            user_name: STRING,
            user_email: STRING,
            user_avatar: STRING,
            register_at: DATE
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users');
    }
};
