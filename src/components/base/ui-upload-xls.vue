<!-- excel 文件上传-->
<template>
   <div>
      <el-upload
         ref="xls"
         :action="action"
         :headers="headers"
         :multiple="multiple"
         :data="data"
         :name="name"
         :with-credentials="withCredentials"
         :show-file-list="showFileList"
         :drag="drag"
         :max-size="maxSize"
         :format="format"
         :disabled="disabled"
         :on-remove="remove"
         :before-upload="beforeUpload"
         :on-progress="progress"
         :on-success="success"
         :on-error="error"
         :http-request="httpRequest"
         :on-exceed="exceedLimit">
         <slot>
            <slot name="trigger"></slot>
            <slot name="tip"></slot>
         </slot>
      </el-upload>

      <p v-if="showProgress && percent">
         <el-progress :text-inside="true" :stroke-width="20" :percentage="percent" status="success"></el-progress>
      </p>
   </div>
</template>

<script>
   export default {
      name: 'upload-excel',
      props: {
         action: {
            type: String,
            required: true
         },
         headers: Object,
         multiple: {
            type: Boolean,
            required: false
         },
         data: {
            type: Object
         },
         name: {
            type: String,
            default: 'file'
         },
         withCredentials: {
            type: Boolean,
            default: false
         },
         showFileList: {
            type: Boolean,
            default: false
         },
         drag: {
            type: Boolean,
            default: false
         },
         autoUpload: {
            type: Boolean,
            default: false
         },
         format: {
            type: Array,
            default() {
               return ['xls', 'xlsx', 'csv'];
            },
         },
         disabled: {
            type: Boolean,
            default: false
         },
         maxSize: Number,
         limit: Number,
         showProgress: { //是否显示上传进度
            type: Boolean,
            default: false
         },
         httpRequest: Function,
         remove: Function
      },
      data() {
         return {
            file: null,
            percent: 0
         }
      },
      methods: {
         beforeUpload(file) {
            if (this.format.length) {
               const type = file.name.split('.').pop().toLocaleLowerCase();
               const bool = this.format.some(item => item.toLocaleLowerCase() === type);

               if (bool) {
                  this.file = file;
                  this.$emit('on-before-upload', file);
               } else {
                  this.$emit('on-before-upload', file);
                  this.file = null;
                  return false;
               }
            }
            return this.autoUpload;
         },

         progress(event, file, fileList) {
            if (this.showProgress) {
               this.percent = event.percent;
            }
            this.$emit('on-progress', event, file, fileList);
         },

         success(response, file, fileList) {
            // console.log(response,file,fileList);
            if (response.code == 10000) {
               this.$emit('on-success', response);
            } else {
               this.$message.error(response.message);
            }
         },

         error(error, file, fileList) {
            this.$emit('on-error');
            this.$message.error(error.response.message);
            if (this.showProgress) {
               this.percent = 0;
               this.file = null;
            }
         },

         exceedLimit(files, fileList) {
            this.$message.info(`当前限制选择 ${this.limit} 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
         },

         post() {
            this.$refs.xls.submit();
         },

         clearFiles() {
            this.$refs.xls.clearFiles();
         },

         clear() {
            this.file = null;
            this.percent = 0;
            this.clearFiles();
         }
      }
   }
</script>
