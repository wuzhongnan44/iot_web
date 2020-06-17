import {validateNull} from 'validate';
import {save} from "../../../api/productManagement/productSetting";

export default {
   props: {
      value: { //开关状态
         type: Boolean,
         default: false
      },
      data: {
         type: Object,
         default() {
            return null;
         }
      }
   },
   data() {
      return {
         show: false, //显示与否
         loading: false,
         params: {
            name: '',
            info: '',
            businessKey: '',
            deviceKey: '',
            downLineTime: '',
            isAutoLogin: '',
            type: '',
            industry: '',
         },
         autoLoginFlag: [
            {
               value: 0,
               label: '关闭'
            },
            {
               value: 1,
               label: '开启',
            }
         ],//自动注册选项
         form_validate: {
            name: [{
               required: true,
               message: '不能为空',
               trigger: ['blur', 'change']
            }],
            downLineTime: [
               {required: true, message: '不能为空', trigger: ['blur', 'change']},
               {min: 1, max: 3, message: '请输入三个字符长的数字', pattern: /^[0-9]{1,3}$/, trigger: ['blur', 'change']},
            ],
            isAutoLogin: [{
               required: true,
               message: '不能为空',
               trigger: ['blur', 'change']
            }],
            type: [{
               required: true,
               message: '不能为空',
               trigger: ['blur', 'change']
            }],
            industry: [{
               required: true,
               message: '不能为空',
               trigger: ['blur', 'change']
            }],
         },
      }
   },

   methods: {
      /**
       * 编辑页面回显
       */
      handleDetail() {
         if (this.data) {
            for (let key of Object.keys(this.data)) {
               if (!validateNull(this.data[key])) {
                  this.params[key] = this.data[key]
               }
            }
         } else {
            //this.param={};
            this.params = {
               name: '',
               info: '',
               downLineTime: '',
               isAutoLogin: null,
               type: null,
               industry: null,
            }
         }
      },

      dialogClose() {
         this.$emit('input', false);
         this.loading = false;
         this.resetField();
      },

      save() {
         this.$refs.form.validate(bool => {
            if (bool) {
               const params = this.params;
               let data = Object.assign(params, {})
               this.loading = true;
               save(data, data.id).then(res => {
                  console.log(Object.assign(res, {}));
                  if (res.data.code === 10000) {
                     this.$emit('on-success');
                     this.show = false;
                  }
                  if (data.id) {
                     this.$message.success('更新成功');
                  } else {
                     this.$message.success('添加成功');
                  }

               }).catch(err => {
                  this.loading = false;
                  }
               );
            }
         })
      },
      resetField() {
         if (this.$refs.form) {
            this.$refs.form.resetFields();
         }
      }
   },
   watch: {
      value(bool) {
         this.show = bool;
         console.log("监听开关状态:", bool);
         if (bool) {
            setTimeout(() => {
               this.handleDetail();
            }, 0);
         }
      },
   }


}
