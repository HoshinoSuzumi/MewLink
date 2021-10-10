'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    // ctx.rotateCsrfSecret();
    await ctx.render('index');
  }
}

module.exports = HomeController;
