<template>
   <div class="frame-main">
      <div class="frame-header">
         <div class="frame-header-wrap">
            <div class="frame-header-logo">
               <span class="log-img">
                  <img src="~images/logo.png"/>
               </span>
               <span class="log-text">福信富通</span>
            </div>

            <div class="frame-header-menu">
               <div class="frame-header-menus" ref="scrollOuter">
                  <ul class="frame-header-menu-inner"
                      ref="scrollBody"
                      @DOMMouseScroll="mouseScroll"
                      @mousewheel="mouseScroll"
                      :style="{left:top_menu_left+'px'}">
                     <li class="frame-header-menu-item" v-for="i in 3">
                        <span>菜单名称{{i}}</span>
                     </li>
                  </ul>
               </div>
            </div>

            <div class="frame-header-other">
               <ul>
                  <li class="header-dropdown-menu">
                     <el-dropdown>
                        <div class="dropdown-menu-text">
                           <i class="icon-user icon iconfont icon-touxiang"></i>
                           <span>&nbsp;登录名称</span>
                           <i class="icon-arror icon iconfont icon-jiantouxia"></i>
                        </div>

                        <el-dropdown-menu slot="dropdown">
                           <el-dropdown-item  @click.native="dropdownChange('signOut')">安全退出</el-dropdown-item>
                        </el-dropdown-menu>
                     </el-dropdown>
                  </li>
               </ul>
            </div>
         </div>
      </div>

      <div class="frame-main-content">
         <div class="frame-aside" :class="{'collapse':menu_collapse}">
            <div class="frame-aside-inner">
               <el-menu ref="navMenu"
                        :collapse-transition="false"
                        router
                        :default-active="path"
                        :collapse="menu_collapse">
                  <el-menu-item index="/productManagement">
                     <i class="el-icon-menu"></i>
                     <span slot="title">产品管理</span>
                  </el-menu-item>

                  <el-submenu popper-class="aside-el-submenu" index="2">
                     <template slot="title">
                        <i class="icon iconfont icon-touxiang"></i>
                        <span>导航二</span>
                     </template>
                     <el-menu-item index="2-1">选项1</el-menu-item>
                     <el-menu-item index="2-2">选项2</el-menu-item>
                  </el-submenu>
                  <el-menu-item index="3">
                     <i class="icon iconfont icon-touxiang"></i>
                     <span>导航三</span>
                  </el-menu-item>
               </el-menu>
            </div>
            <span class="aside-collapse" @click="asideCollapse"></span>
         </div>

         <div class="frame-content pd">
            <div class="moduleMainContent">
               <router-view></router-view>
            </div>
         </div>
      </div>
   </div>
</template>

<script src="./js/index.js"></script>

<style lang="scss">
   @import "~css/layout.scss";
</style>
