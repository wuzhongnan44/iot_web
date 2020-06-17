export default {
   data() {
      return {
         search_show: false,
         table: {
            size_options: [20, 50, 100, 150, 200]
         },
         params: {
         }
      }
   },
   created() {
      this.params.pageSize = 20; //分页条数
   },
   methods: {
      /**
       * 改变分页个数
       * @param pageSize
       */
      pageSizeChange(pageSize) {
         this.params.pageSize = pageSize;
         this.index(1);
      },

      /**
       * 列宽改变，对 Table 进行重新布局
       */
      tableDoLayout() {
         this.$nextTick(() => {
            if (this.$refs.table) {
               this.$refs.table.doLayout();
            }
         })
      },

      /**
       * 按enter键页面搜索
       * @param e
       */
      enterMethod(e, callback) {
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
               callback();
            }
         });
      }
   }
}
