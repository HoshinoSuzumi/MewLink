'use strict';

const md5 = require('md5-node');
const Controller = require('egg').Controller;

class TinyUrlController extends Controller {
    async index() {
        const ctx = this.ctx;
        ctx.status = 403;
    }

    async create() {
        const ctx = this.ctx;
        const {original_url} = ctx.request.body;
        if (!original_url) {
            ctx.status = 400;
            return
        }
        let create_at = new Date().getTime();
        let token = md5(create_at).toString().substring(0, 6);
        let url = await ctx.model.Tinyurl.findAll({where: {token: token}});
        if (url.length > 0) {
            ctx.status = 422;
            return
        }
        const url_rst = await ctx.model.Tinyurl.create({token, original_url, create_at});
        ctx.status = 201;
        ctx.body = url_rst;
    }

    async show() {
        const ctx = this.ctx;
        const result = await ctx.service.url.getUrlByToken(ctx.params.id);
        if (!result) {
            ctx.status = 404;
            return
        }
        ctx.body = result;
    }

    async redirectUrl() {
        const ctx = this.ctx;
        const result = await ctx.service.url.getUrlByToken(ctx.params.token);
        if (!result) {
            ctx.status = 404;
            await ctx.render('not-found');
            return
        }
        ctx.redirect(result.original_url);
    }
}

module.exports = TinyUrlController;