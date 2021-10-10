'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const {INTEGER, STRING, DATE} = Sequelize;
        await queryInterface.createTable('tinyurls', {
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
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('tinyurls')
    }
};
