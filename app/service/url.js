const Service = require('egg').Service;

class UrlService extends Service {
    async getUrlByToken(token) {
        const ctx = this.ctx;
        return await (await ctx.model.Tinyurl.findAll({
                where: {
                    token: token
                },
                attributes: ['token', 'original_url']
            })
        )[0];
    }
}

module.exports = UrlService;