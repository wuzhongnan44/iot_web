import {MessageBox} from 'element-ui';

const install = function (Vue, opts) {
   /**
    *
    * @param total_count 列表总个数
    * @param per_page 每页个数
    * @param current_page 当前页码
    * @param page_count 当前页数据总个数
    * @returns {*}
    */
   Vue.prototype.returnPageSize = function (current_page, page_count, del_count) {
      if (current_page != 1) {
         if (del_count < page_count) {
            return current_page;
         } else {
            return current_page - 1;
         }
      }
      return current_page;
   };

   /**
    * 树形结构数据处理
    * @param data
    * @returns {Array}
    */
   Vue.prototype.handleTreesData = function (data, isDefaultExpanded = true, isDisabled = false) {
      let array = [];
      data.forEach((item, index) => {
         let obj = {
            id: item.id,
            pid: item.pid ? item.pid : '',
            label: item.text,
            isDefaultExpanded,
            isDisabled
         };

         if (Array.isArray(item.children) && item.children.length) {
            obj.children = this.handleTreesData(item.children, isDefaultExpanded, isDisabled);
         }
         array.push(obj);
      });
      return array;
   };

   /**
    * 二进制流导出表
    * @param binary_stream 二进制流
    * @param name 表名
    */
   Vue.prototype.exportExcels = function (binary_stream, name) {
      // type 为需要导出的文件类型，此处为xls表格类型
      const blob = new Blob([binary_stream], {
         type: 'application/vnd.ms-excel'
      });
      // 兼容不同浏览器的URL对象
      const url = window.URL || window.webkitURL || window.moxURL;
      // 创建下载链接
      const downloadHref = url.createObjectURL(blob);
      // 创建a标签并为其添加属性
      let downloadLink = document.createElement('a');
      downloadLink.setAttribute('href', downloadHref);
      downloadLink.setAttribute('download', name);
      // downloadLink.href = downloadHref;
      // downloadLink.download = name;
      document.body.appendChild(downloadLink); // Required for FF
      downloadLink.click();
      document.body.removeChild(downloadLink);
      url.revokeObjectURL(downloadHref);
   };

   /**
    * 文件失败导出提示
    * @param fileName 文件名
    * @param result 数据
    * @param downloadCallback 下载点击事件
    */
   Vue.prototype.importUploadFile = function (fileName, result, callback, downloadCallback) {
      try {
         const h = this.$createElement;
         MessageBox({
            title: '提示',
            closeOnClickModal: false,
            closeOnPressEscape: false,
            callback,
            message: h('p', {
                  style: {
                     fontSize: '14px',
                     marginTop: '15px'
                  }
               },
               [
                  h('span', result.message + ' 请点击下载：'),
                  h('span', {
                     domProps: {
                        innerHTML: fileName
                     },
                     class: ['primary-color', 'c-p'],
                     on: {
                        click: () => {
                           if (typeof downloadCallback === 'function') {
                              downloadCallback(result.data);
                           } else {
                              console.log('请传入方法');
                           }
                        }
                     },
                  }),
               ]
            ),
            showCancelButton: false
         });
      } catch (e) {
         console.log(e);
      }
   };

   /**
    * 判断是否有功能权限 isAdmin为true表示超级管理员
    * @param val
    * @returns {*}
    */
   Vue.prototype.hasNodes = function (val) {
      const page_nodes = this.$store.state.permissions.page_nodes;
      let {isAdmin} = this.$store.state.permissions.account;
      return isAdmin ? true : page_nodes.includes(val);
   };

   /**
    * 通过菜单id获取当前菜单功能权限
    */
   Vue.prototype.getMenuFuncs = function () {
      return new Promise((resolve, reject) => {
         const {
            mid: menuId
         } = this.$route.query;
         if (menuId) {
            this.$store.dispatch('getMenuFuncs', {
               menuId
            }).then(res => {
               resolve(res);
            }).catch(err => {
               reject(err);
            });
         } else {
            resolve();
         }
      });
   };

   /**
    * 设置表格列宽最小宽度
    * @param h
    * @param column
    * @param $index
    * @returns {*}
    */
   Vue.prototype.setTableColumnWidth = function (h, {
      column,
      $index
   }) {
      let length = column.label.length;
      let size = 16; //每个字大小
      column.minWidth = length * size + 20 + 24; //字占用的宽度
      return h('span', {}, [column.label]);
   };

   Vue.prototype.deepClone = function(source){
      if (!source && typeof source !== 'object') {
         throw new Error('error arguments', 'shallowClone');
      }
      const targetObj = source.constructor === Array ? [] : {};
      for (const keys in source) {
         if (source.hasOwnProperty(keys)) {
            if (source[keys] && typeof source[keys] === 'object') {
               targetObj[keys] = source[keys].constructor === Array ? [] : {};
               targetObj[keys] = this.deepClone(source[keys]);
            } else {
               targetObj[keys] = source[keys];
            }
         }
      }
      return targetObj;
   };

   /**
    * [imgEvent 判断图片路径是否有效，有效返回src,无效返回空，此用法用于图片上传处]
    * @param  {[type]} src [图片路径]
    * @return {[type]}     [description]
    */
   Vue.prototype.imgEvent = function (src) {
      let img = new Image();
      img.src = src;

      return new Promise(function (resolve, reject) {
         img.onerror = function (event) {
            reject('');
         };

         img.onload = function () {
            resolve(src);
         };
      });
   };
};

export default {
   install
}
