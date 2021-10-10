/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1633485386340_294';

    // add your middleware config here
    config.middleware = [];

    config.sequelize = {
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        database: 'mewlink',
    };

    config.view = {
        defaultExtension: '.nj',
        defaultViewEngine: 'nunjucks',
    };

    config.security = {
        csrf: {
            headerName: 'x-csrf-token',
            useSession: false,
            cookieName: 'csrfToken',
            sessionName: 'csrfToken',
        },
    };

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};
