<template>
   <div class="yvue-crud">
      <!-- 头部     -->
      <div class="yvue-crud__header">
         <div class="header-left">
            <h3>产品管理</h3>
            <!--            <h3 class="header-menu-title">{{(permissions_object && permissions_object[$route.query.mid])?permissions_object[$route.query.mid].title:''}}</h3>-->
            <p class="header-menu-tips"></p>
         </div>
         <ul class="header-right">
            <li class="header-menu-item">
               <el-button type="primary" icon="el-icon-plus" @click="openEdit(true)">添加</el-button>
            </li>
            <li class="header-menu-item" v-if="false">
               <el-button type="primary" icon="el-icon-upload2" @click="openExport">导入</el-button>
            </li>
            <li class="header-menu-item">
               <el-button type="primary" icon="el-icon-search" plain @click="search_show=!search_show">搜索</el-button>
            </li>
            <li class="header-menu-item">
               <el-button icon="el-icon-refresh-right"
                          plain
                          @click="index(1)"
                          :disabled="table_loading">刷新
               </el-button>
            </li>
         </ul>
      </div>
      <!--   查询框-->
      <ul class="yvue-crud__search">
         <li class="search-item">
            <el-input placeholder="请输入产品名称" clearable v-model.trim="params.name"></el-input>
         </li>
         <li class="search-item">
            <el-input placeholder="请输入产品类别" clearable v-model.trim="params.type"></el-input>
         </li>
         <li class="search-item">
            <el-input placeholder="请输入行业" clearable v-model.trim="params.industry"></el-input>
         </li>
         <li class="search-item">
            <el-date-picker v-model="params.createTime"
                            placeholder="请输入创建日期"
                            clearable
                            :picker-options="datePickerOptions"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
         </li>
         <li class="search-item">
            <el-button type="primary" plain @click="index(1)" :disabled="table_loading">立即搜索</el-button>
         </li>
         <li class="search-item">
            <el-button type="warning" plain @click="resetSearch" :disabled="table_loading">重置搜索</el-button>
         </li>
      </ul>
      <!--      表格框-->
      <div class="yvue-crud__table">
         <el-table
            ref="table"
            id="elTable"
            header-row-class-name="crud-table-header"
            cell-class-name="crud-table-cell"
            border
            stripe
            highlight-current-row
            height="100%"
            v-loading="table_loading"
            :data="(data?data.rows:[])"
            @header-dragend="tableDoLayout">
            <el-table-column label="序号" prop show-overflow-tooltip width="50px">
               <template slot-scope="{$index}">{{$index+1}}</template>
            </el-table-column>
            <el-table-column
               v-if="tableColumnShow"
               label="产品id"
               prop="id"
               show-overflow-tooltip
               :render-header="setTableColumnWidth"></el-table-column>
            <el-table-column
               label="产品名称"
               prop="name"
               show-overflow-tooltip
               :render-header="setTableColumnWidth"></el-table-column>
            <el-table-column
               label="产品信息"
               prop="info"
               show-overflow-tooltip
               :render-header="setTableColumnWidth"></el-table-column>
            <el-table-column
               label="业务key"
               prop="businessKey"
               show-overflow-tooltip
               :render-header="setTableColumnWidth"></el-table-column>
            <el-table-column
               label="设备key"
               prop="deviceKey"
               show-overflow-tooltip
               :render-header="setTableColumnWidth"></el-table-column>
            <el-table-column
               label="设备自动下线分钟数"
               prop="downLineTime"
               show-overflow-tooltip
               :render-header="setTableColumnWidth"></el-table-column>
            <el-table-column
               label="是否开启自动注册"
               prop="isAutoLogin"
               show-overflow-tooltip
               :render-header="setTableColumnWidth"></el-table-column>
            <el-table-column
               label="产品类别"
               prop="type"
               show-overflow-tooltip
               :render-header="setTableColumnWidth"></el-table-column>
            <el-table-column
               label="行业"
               prop="industry"
               show-overflow-tooltip
               :render-header="setTableColumnWidth"></el-table-column>
            <el-table-column
               v-if="tableColumnShow"
               label="权限标记"
               prop="permissionSign"
               show-overflow-tooltip
               :render-header="setTableColumnWidth"></el-table-column>
            <el-table-column
               label="创建时间"
               prop="createTime"
               show-overflow-tooltip
               :render-header="setTableColumnWidth"></el-table-column>
            <el-table-column
               v-if="tableColumnShow"
               label="更新时间"
               prop="updateTime"
               show-overflow-tooltip
               :render-header="setTableColumnWidth"></el-table-column>

            <el-table-column label="操作" width="320">
               <template slot-scope="{row,$index}">
                  <el-button
                     type="primary"
                     icon="el-icon-edit-outline"
                     @click="openEdit(true,row)"
                  >编辑
                  </el-button>
                  <el-button
                     type="danger"
                     icon="el-icon-delete"
                     @click="deleted(row.id,$index)"
                  >删除
                  </el-button>
               </template>
            </el-table-column>
         </el-table>

      </div>

      <div class="yvue-crud__page">
         <el-pagination
            :page-sizes="table.size_options"
            :page-size="params.rows"
            :total="data?data.total:0"
            :current-page.sync="params.pageNo"
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="pageSizeChange"
            @current-change="index($event)"></el-pagination>
      </div>
      <ui-edit v-model="edit_obj.show" :data="edit_obj.data" @on-success="index()"></ui-edit>
   </div>
</template>

<script src="./js/index.js">

</script>

<style scoped>

</style>
