import dateMixin from 'mixins/date';

export default {
   mixins: [dateMixin],
   data() {
      const self = this;
      return {
         page_loading: { //加载中
            show: false,
            msg: ''
         },
         none_obj: { //无数据
            show: false,
            msg: '未找到相关信息'
         }
      }
   },
   methods: {
      //加载中
      isShowLoading(bool = false) {
         this.page_loading.show = bool;
      },

      //无数据
      isShowNoneData(bool = false) {
         this.none_obj.show = bool;
      }
   }
}
