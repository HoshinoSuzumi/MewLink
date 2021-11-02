const Service = require('egg').Service;

class Oauth extends Service {
    async getOAuth({id, provider}) {
        const {ctx} = this;
        const data = await ctx.model.Oauth.findOne({
            where: {
                uid: id,
                provider: provider
            },
            include: [
                {model: ctx.model.User}
            ]
        });
        try {
            return data.dataValues.user.dataValues;
        } catch (e) {
            throw new Error('授权用户不存在');
        }
    }

    async createOAuth(obj) {
        return this.ctx.model.Oauth.create(obj);
    }
}

module.exports = Oauth;