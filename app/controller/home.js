'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello world !';
  }
	async list() {
		this.ctx.body = "you you you ,"
	}
}

module.exports = HomeController;
