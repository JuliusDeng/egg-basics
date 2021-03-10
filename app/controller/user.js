'use strict';

const Controller = require('egg').Controller;

const demo = [{
  id: 1,
  username: '用户名1',
  nickname: '昵称1',
  sex: '男',
},
{
  id: 2,
  username: '用户名2',
  nickname: '昵称2',
  sex: '男',
},
{
  id: 3,
  username: '用户名3',
  nickname: '昵称3',
  sex: '男',
},
];
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
    const id = this.ctx.params.id;
    const detail = demo.find(e => {
      console.log(e);
      return e.id == id;
    });
    this.ctx.body = {
      msg: 'ok',
      data: detail,
    };
    this.ctx.status = 201;
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
