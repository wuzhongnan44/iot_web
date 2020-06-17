export default {
   data() {
      return {
         menu_collapse: false, //左侧菜单收缩
         top_menu_left: 0, //头部菜单滑动距离
         path:'',
      }
   },
   created() {
      this.onRouteChanged()

   },
   methods: {
      //左侧菜单展开收缩
      asideCollapse() {
         this.menu_collapse = !this.menu_collapse;
      },

      dropdownChange(type) {
         switch (type) {
            case 'signOut':
               this.$alert('您确定要退出当前账号？', '提示', {
                  confirmButtonText: '确定',
                  callback: action => {
                     if (action == 'confirm') {

                     }
                  }
               });
               break;
         }
      },

      mouseScroll(e) {
         const type = e.type;
         let delta = 0;
         if (type === 'DOMMouseScroll' || type === 'mousewheel' || type === 'wheel') {
            delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40;
         }
         this.handleScroll(delta);
      },

      handleScroll(offset) {
         const outerWidth = this.$refs.scrollOuter.offsetWidth;
         const bodyWidth = this.$refs.scrollBody.offsetWidth;
         if (offset > 0) {
            this.top_menu_left = Math.min(0, this.top_menu_left + offset);
         } else {
            if (outerWidth < bodyWidth) {
               if (this.top_menu_left < -(bodyWidth - outerWidth)) {
                  this.top_menu_left = this.top_menu_left;
               } else {
                  this.top_menu_left = Math.max(this.top_menu_left + offset, outerWidth - bodyWidth);
               }
            } else {
               this.top_menu_left = 0;
            }
         }
      },
      onRouteChanged(){
         let that=this;

         that.path=this.$route.path
         console.log(that.path)
      }


   },
   watch: {
      // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
      '$route': 'onRouteChanged'
   }
}
