import {getToken} from 'service/token';

export default {
   name: 'uploadImg',
   props: {
      action: { //上传接口
         type: String,
         default: '#'
      },
      headers: {
         type: Object,
         default() {
            return {'Authorization': getToken()};
         }
      },
      multiple: Boolean,
      data: Object,
      name: { //上传字段名
         type: String,
         default: 'file'
      },
      withCredentials: Boolean, ////支持发送 cookie 凭证信息
      showFileList: { //是否显示已上传文件列表
         type: Boolean,
         default: true
      },
      drag: { //是否启用拖拽上传
         type: Boolean,
         default: false
      },
      format: { //支持的格式
         type: Array,
         default() {
            return ['.jpg', '.png', '.gif', '.bmp', '.jpeg']
         }
      },
      maxSize: { //允许上传的图片大小
         type: Number,
         default: 2 * 1024 //默认2M(单位 kb)
      },
      listType: { //文件列表的类型
         type: String,
         default: 'picture-card' // text,picture,picture-card
      },
      autoUpload: { //是否在选取文件后立即进行上传
         type: Boolean,
         default: false
      },
      fileList: { //上传的文件列表
         type: Array,
         default() {
            return [];
         }
      },
      disabled: Boolean, //是否禁用
      limit: Number, //最大允许上传个数
      onPreview: Function,
      onRemove: Function,
      onSuccess: Function,
      onError: Function,
      onProgress: Function,
      onChange: Function,
      beforeUpload: Function,
      beforeRemove: Function,
      httpRequest: Function, ////覆盖默认的上传行为，可以自定义上传的实现
      onExceed: Function
   },
   data() {
      return {
         previewImg: {
            show: false,
            url: ''
         }
      }
   },
   computed: {
      /**
       * 接受上传的文件类型
       * @returns {string|*}
       */
      accept() {
         if (Array.isArray(this.format) && this.format.length) {
            return this.format.join(',');
         }
         return 'image/*';
      }
   },
   watch: {},
   methods: {
      /**
       * 点击文件列表中已上传的文件时的钩子
       */
      handlePreview(file) {
         if (typeof this.onPreview === 'function') {
            this.onPreview(file);
         } else {
            this.previewImg = {
               show: true,
               url: file.url
            }
         }
      },

      /**
       * 文件列表移除文件时的钩子
       * @param file
       * @param fileList
       */
      handleRemove(file, fileList) {
         if (typeof this.onRemove === 'function') {
            this.onRemove(file, fileList);
         }
      },

      /**
       * 文件上传成功时的钩子
       * @param response
       * @param file
       * @param fileList
       */
      handleSuccess(response, file, fileList) {
         if (typeof this.onSuccess === 'function') {
            this.onSuccess(response, file, fileList);
         } else {
            if (response.data.code === 10000) {
               this.$message.success('提交成功');
            }
         }
      },

      /**
       * 文件上传失败时的钩子
       * @param err
       * @param file
       * @param fileList
       */
      handleError(err, file, fileList) {
         if (typeof this.onError === 'function') {
            this.onError(err, file, fileList);
         } else {

         }
      },

      /**
       * 文件上传时的钩子
       * @param event
       * @param file
       * @param fileList
       */
      handleProgress(event, file, fileList) {
         if (typeof this.onProgress === 'function') {
            this.onProgress(event, file, fileList);
         } else {

         }
      },

      /**
       * 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
       * @param file
       * @param fileList
       */
      handleChange(file, fileList) {
         if (typeof this.onChange === 'function') {
            this.onChange(file, fileList);
         } else {
            const removeFile = () => {
               //图片删除
               fileList.splice(fileList.length - 1, 1);
            };

            if (!file.raw || !this.format.includes(`.${file.raw.type.split('/')[1]}`)) { //type:'image/jpeg'
               this.$message.warning('图片格式不正确');
               removeFile();
               return;
            }

            //maxSize单位：kb, file.size单位：k
            if (this.maxSize < (file.size / 1024)) {
               this.$message.warning('图片不能超出指定大小');
               removeFile();
               return;
            }

            this.$emit('select-file-success', file, fileList); //on-change调用内置方法时，文件选取成功的事件
         }
      },

      /**
       * 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
       * @param file
       */
      handleBeforeUpload(file) {
         if (typeof this.beforeUpload === 'function') {
            return this.beforeUpload(file);
         } else {
            return this.autoUpload;
         }
      },

      /**
       * 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。
       * 删除前的提示处理在此函数内进行处理
       * @param file
       * @param fileList
       */
      handleBeforeRemove(file, fileList) {
         if (typeof this.beforeRemove === 'function') {
            return this.beforeRemove(file, fileList);
         } else {

         }
      },

      /**
       * 文件超出个数限制时的钩子
       * @param files
       * @param fileList
       */
      handleExceedLimit(files, fileList) {
         if (typeof this.onExceed === 'function') {
            this.onExceed(files, fileList);
         } else {
            this.$message.warning(`当前限制选择 ${this.limit} 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
         }
      },

      /**
       * 手动上传文件列表
       */
      submit() {
         this.$refs.upload.submit();
      },

      /**
       * 取消上传请求
       */
      abort() {
         this.$refs.upload.abort();
      },

      /**
       * 清空已上传的文件列表（该方法不支持在 before-upload 中调用）
       */
      clearFiles() {
         this.$refs.upload.clearFiles();
      }
   }
}
