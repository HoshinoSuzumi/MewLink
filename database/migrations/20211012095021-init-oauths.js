'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const {INTEGER, STRING} = Sequelize;
        await queryInterface.createTable('oauths', {
            access_token: STRING,
            provider: STRING,
            uid: STRING,
            user_id: INTEGER
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('oauths');
    }
};
