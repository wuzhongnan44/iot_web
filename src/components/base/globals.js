/**
 * 基础组件自动化全局注册
 */

import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

const require_component = require.context(
   '.',  // 其组件目录的相对路径
   false, // 是否查询其子目录
   /ui-[\w-]+\.vue$/, // 匹配基础组件文件名的正则表达式
);

require_component.keys().forEach(file_name => {
   // 获取组件配置
   const component_config = require_component(file_name);

   // 获取组件的 PascalCase 命名
   const component_name = upperFirst(camelCase(file_name.replace(/^\.\/\_/, '').replace(/\.\w+$/, '')));

   // 全局注册组件
   // 如果这个组件选项是通过 `export default` 导出的，
   // 那么就会优先使用 `.default`，
   // 否则回退到使用模块的根。
   Vue.component(component_name, component_config.default || component_config);
});
