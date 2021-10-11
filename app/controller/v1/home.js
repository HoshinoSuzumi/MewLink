'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const ctx = this.ctx;
        await ctx.render('index', {
            user: ctx.user,
            isAuthenticated: ctx.isAuthenticated()
        });
    }

    async logout() {
        const ctx = this.ctx;
        ctx.logout();
        ctx.redirect(ctx.get('referer') || '/')
    }
}

module.exports = HomeController;
