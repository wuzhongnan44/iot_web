<template>
   <div class="upload-image">
      <el-upload
         ref="upload"
         :action="action"
         :headers="headers"
         :multiple="multiple"
         :data="data"
         :name="name"
         :with-credentials="withCredentials"
         :show-file-list="showFileList"
         :drag="drag"
         :accept="accept"
         :list-type="listType"
         :auto-upload="autoUpload"
         :file-list="fileList"
         :disabled="disabled"
         :limit="limit"
         :on-preview="handlePreview"
         :on-remove="handleRemove"
         :on-success="handleSuccess"
         :on-error="handleError"
         :on-progress="handleProgress"
         :on-change="handleChange"
         :before-upload="handleBeforeUpload"
         :before-remove="handleBeforeRemove"
         :http-request="httpRequest"
         :on-exceed="handleExceedLimit">
         <i class="el-icon-plus"></i>
      </el-upload>

      <el-dialog width="700px"
                 :visible.sync="previewImg.show"
                 title="图片预览"
                 append-to-body
                 :close-on-click-modal="false"
                 :close-on-press-escape="false">
         <div class="image-preview">
            <img :src="previewImg.url" alt="">
         </div>
      </el-dialog>
   </div>
</template>

<script src="./js/ui-upload-img.js"></script>

<style scoped lang="scss">
   .image-preview {
      padding: 10px 0;
      text-align: center;

      img {
         padding: 10px;
         max-width: 668px;
      }
   }
</style>
