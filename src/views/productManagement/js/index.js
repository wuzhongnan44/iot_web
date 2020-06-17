import tableMixin from "@/mixins/table"
import * as API from "../../../api/productManagement/productSetting"
import fa from "element-ui/src/locale/lang/fa";


export default {
   name: 'productManagement',
   mixins: [tableMixin],
   components: {
      UiEdit: () => import('../edit')
   },
   data() {
      return {
         params: {
            pageNo: 1,
         },

         data: null,
         //添加/编辑页面传递数据
         edit_obj: {
            show: false,
            data: null
         },
         table_loading: false,
         tableColumnShow: false,

      }
   },
   created() {
      window.addEventListener('keydown', this.enterMethod, false);
      this.init();
   },
   destroyed() {
      window.removeEventListener('keydown', this.enterMethod);
   },
   methods: {

      init() {
         this.index(1);
      },

      /**
       * 回车点击事件
       * @param e
       */
      enterMethod(e) {
         this.$nextTick(() => {
            if (e.keyCode == 13 || e.which == 13) {
               //过滤当前enter事件为切换页码
               const activeElement = document.activeElement;
               if (activeElement) {
                  const parentNode = activeElement.parentNode;
                  if (parentNode && parentNode.className.indexOf('el-pagination__editor') !== -1) {
                     return;
                  }
               }
               this.index(1);
            }
         });
      },

      /**
       * 产品列表查询
       * @param args
       */
      index(page) {
         $('#elTable .el-table__body-wrapper').scrollTop(0);
         this.params.pageNo = page;
         let data = Object.assign(this.params, {});
         this.table_loading = true;
         console.log("搜索参数param", this.params)
         API.index(data).then(res => {
            let a =Object.assign(res.data,{});
            console.log("后端传递的数据：",a)
            this.table_loading = false;
            const result = res.data;
            if (result.code === 10000) {
               this.data = {
                  total: result.data.totalCount,
                  rows: result.data.rows
               };
               this.$nextTick(() => {
                  this.tableDoLayout();
               })
            }
         }).catch(err => {
            this.table_loading = false;
         })
      },
      /**
       * [request 刷新]
       * @return {[type]} [description]
       */
      request() {
         const current_page = this.params.pageNo;
         const page_count = this.data.rows.length;
         this.params.pageNo = this.returnPageSize(current_page, page_count, 1);
         this.index();
      },

      /**
       * 重置搜索
       *
       */
      resetSearch() {
         this.params.name=null;
         this.params.industry=null;
         this.params.createTime=null;
         this.params.type=null;
         this.index(1);
      },
      /**
       * 添加/编辑产品
       * @param bool
       * @param row
       */
      openEdit(bool, data = null) {
         this.edit_obj = {show: bool, data};
         // this.$refs.uiEdit.show=true;
         // this.$refs.uiEdit.data=row;
      },
      /**
       * 删除产品
       * @param row
       */
      deleted(id) {
         let that = this;
         this.$confirm("确认执行删除操作?", "警告", {
            type: 'warning'
         }).then(() => {
            API.deleted(id).then(res => {
               if (res.data.code === 10000) {
                  this.$message.success("删除成功")
                  that.request();
               }
            })
         })
      },

   }

}
