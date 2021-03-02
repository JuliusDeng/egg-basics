'use strict';

const Controller = require('egg').Controller;

let demo = [{
		id: 1,
		username: '用户名1',
		nickname: '昵称1',
		sex: '男'
	},
	{
		id: 2,
		username: '用户名2',
		nickname: '昵称2',
		sex: '男'
	},
	{
		id: 3,
		username: '用户名3',
		nickname: '昵称3',
		sex: '男'
	},
]
class UserController extends Controller {
	async index() {
		let result = demo;
		let page = this.ctx.query
		console.log('page:34534', page);
		this.ctx.body = {
			msg: 'ok',
			data: result
		}
	}
	async read() {
		let id = this.ctx.params.id;
		let detail = demo.find(e => {
			console.log(e);
			return e.id == id
		})
		this.ctx.body = {
			msg: 'ok',
			data: detail
		}
		this.ctx.status = 201
		
	}
}

module.exports = UserController;
