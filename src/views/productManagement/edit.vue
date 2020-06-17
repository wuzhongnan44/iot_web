<template>
   <el-dialog width="500px" :visible.sync="show" :title="data?'修改资产':'添加资产'" :close-on-click-modal="false"
              :close-on-press-escape="false" @close="dialogClose">
      <div class="yvue-form" v-loading="page_loading.show">
         <el-form ref="form" :model="params" :rules="form_validate" label-width="160px" label-position="right">
            <div class="fieldset-content">
               <el-row :gutter="24">
                  <el-col :span="24">
                     <el-form-item prop="name" label="产品名称：">
                        <el-input clearable v-model.trim="params.name" placeholder="请输入产品名称"
                                  :maxlength="255"></el-input>
                     </el-form-item>
                  </el-col>
                  <el-col :span="24">
                     <el-form-item prop="info" label="产品信息：">
                        <el-input clearable v-model.trim="params.info" placeholder="请输入产品信息"
                                  :maxlength="255"></el-input>
                     </el-form-item>
                  </el-col>
                  <el-col :span="24">
                     <el-form-item prop="downLineTime" label="设备自动下线分钟数：">
                        <el-input clearable v-model.trim="params.downLineTime" placeholder="请输入设备自动下线分钟数"
                                  :maxlength="255"></el-input>
                     </el-form-item>
                  </el-col>
                  <el-col :span="24">
                     <el-form-item  prop="isAutoLogin" label="是否开启自动注册：">
                        <el-select
                           clearable
                           v-model="params.isAutoLogin"
                           placeholder="请选择是否开启自动注册">
                           <el-option
                              v-for="item in autoLoginFlag"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                           </el-option>
                        </el-select>
                     </el-form-item>
                  </el-col>
                  <el-col :span="24">
                     <el-form-item prop="type" label="产品类别：">
                        <el-input clearable v-model.trim="params.type" placeholder="请输入产品类别"
                                  :maxlength="255"></el-input>
                     </el-form-item>
                  </el-col>
                  <el-col :span="24">
                     <el-form-item prop="industry" label="行业：">
                        <el-input clearable v-model.trim="params.industry" placeholder="请输入行业"
                                  :maxlength="255"></el-input>
                     </el-form-item>
                  </el-col>
               </el-row>

            </div>
         </el-form>

      </div>

      <div class="yvue-form__footer center">
         <el-button @click="resetField" type="primary" plain>重置</el-button>
         <el-button @click="save" type="primary" :loading="loading">保存</el-button>
      </div>
   </el-dialog>
</template>

<script src="./js/edit.js">

</script>
