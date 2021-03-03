/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1614675686880_3725';

  // add your middleware config here
  config.middleware = [];
	// 关闭 csrf跨域
	config.security = {
		// 关闭 csrf跨域
		csrf: {
			enable: false,
		},
		// 跨域白名单
		domainWhiteList: [],
	};
	config.cors = {
		origin:'*',
		allowMethods: 'GET, PUT, POST, DELETE, PATCH'
	};
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
