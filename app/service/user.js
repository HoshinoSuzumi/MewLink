const Service = require('egg').Service

class UserService extends Service {
    async createUser(userInfo) {
        const ctx = this.ctx;
        userInfo = {...userInfo}
        userInfo.register_at = new Date().getTime();
        let user = await ctx.model.User.create(userInfo);
        return user.dataValues;
    }
}

module.exports = UserService;
