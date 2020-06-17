<template>
   <div class="none-wraper ta-c" v-if="show">
      <div><i class="icon iconfont" :class="icon"></i></div>
      <p class="msg">{{message}}</p>
   </div>
</template>

<script>
   export default{
      props: {
         show: {
            type: Boolean,
            default: false
         },
         message: {
            type: String,
            default: '未找到相关信息'
         },
         icon:{
            type: String,
            default: 'icon-zanwuxiaoxi-'
         }
      }
   }
</script>

<style scoped lang="scss">
   .none-wraper{
      padding-top: 50px;
      padding-bottom: 50px;

      .icon{
         color: #b3b3b3;
         font-size: 100px;
      }

      .msg{
         color: #b3b3b3;
         font-size: 13px;
      }
   }
</style>
