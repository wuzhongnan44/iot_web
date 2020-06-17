import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
import routes from './routes';
const router = new VueRouter({
   mode: 'history',
   base: '/',
   routes
});

router.beforeEach((to, from, next)=>{
   if (to.matched.some(record => record.meta.auth)) {
      const token = Cookies.get('token');
      if(token){
         console.log("有权限")
         next();
      }else{
         console.log("无权限")
         next();
      }
   }else{
      next();
   }
});

export default router;
