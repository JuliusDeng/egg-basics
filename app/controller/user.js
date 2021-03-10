'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const result = demo;
    const page = this.ctx.query;
    console.log('page:34534', page);
    this.ctx.body = {
      msg: 'ok',
      data: result,
    };
  }
  async read() {
    const id = parseInt(this.ctx.params.id);
		// 通过主键查询单个数据
		// let detail = await this.app.model.User.findByPk(id)
		// if(!detail) {
		// 	return this.ctx.body = {
		// 		msg: "fali",
		// 		data: "该用户不存在！"
		// 	}
		// }
		// 查询单个
		let detail = await this.app.model.User.findOne({
			where: {
				id,
				sex: "女"
			}
		}) 
		
    this.ctx.body = {
      msg: 'ok',
      data: detail,
    };
    this.ctx.status = 200;
  }
	
	async create() {
		// 参数验证
		// 写入数据库
		
		// 从ctx中取model ctx代替this.app
		const ctx = this.ctx;
		const {name, age} = ctx.request.body
		// 新增单个
		// let res = await this.app.model.User.create({
		//     username: "ceshi3",
		//     password: "123456",
		//     sex: "男"
		// });
		
		// 批量新增
		
		let res = await ctx.model.User.bulkCreate([
			{
			    username: "用户17",
			    password: "密码1",
			    sex: "男"
			},
			{
			    username: "用户28",
			    password: "密码2",
			    sex: "男"
			},
			{
			    username: "用户39",
			    password: "密码3",
			    sex: "男"
			},
		])
		// 成功
		this.ctx.body = res
		
		
	}
	
}

module.exports = UserController;
