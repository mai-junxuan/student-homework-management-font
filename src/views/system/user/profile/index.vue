<template>
   <div class="app-container">
      <el-row :gutter="20">
         <el-col :span="6" :xs="24">
            <el-card class="box-card">
               <template v-slot:header>
                 <div class="clearfix">
                   <span>个人信息</span>
                 </div>
               </template>
               <div>
                  <ul class="list-group list-group-striped">
                     <li class="list-group-item">
                        <svg-icon icon-class="user" />姓名
                        <div class="pull-right">{{ state.user.nickName }}</div>
                     </li>
                     <li class="list-group-item">
                        <svg-icon icon-class="phone" />班级
                        <div class="pull-right">{{ state.dept.deptName }}</div>
                     </li>
                     <li class="list-group-item">
                        <svg-icon icon-class="email" />学号
                        <div class="pull-right">{{ state.user.userName }}</div>
                     </li>
                    <li class="list-group-item">
                        <svg-icon icon-class="email" />密码
                        <div class="pull-right">{{ state.password }}</div>
                     </li>
<!--                     <li class="list-group-item">-->
<!--                        <svg-icon icon-class="tree" />所属班级-->
<!--                        <div class="pull-right" v-if="state.user.dept">{{ state.user.dept.deptName }} / {{ state.postGroup }}</div>-->
<!--                     </li>-->
<!--                     <li class="list-group-item">-->
<!--                        <svg-icon icon-class="peoples" />所属角色-->
<!--                        <div class="pull-right">{{ state.roleGroup }}</div>-->
<!--                     </li>-->
<!--                     <li class="list-group-item">-->
<!--                        <svg-icon icon-class="date" />创建日期-->
<!--                        <div class="pull-right">{{ state.user.createTime }}</div>-->
<!--                     </li>-->
                  </ul>
               </div>
            </el-card>
         </el-col>
         <el-col :span="18" :xs="24">
            <el-card>
               <template v-slot:header>
                 <div class="clearfix">
                   <span>基本资料</span>
                 </div>
               </template>
               <el-tabs v-model="activeTab">
<!--                  <el-tab-pane label="基本资料" name="userinfo">-->
<!--                     <userInfo :user="state.user" />-->
<!--                  </el-tab-pane>-->
                  <el-tab-pane label="修改密码" name="resetPwd">
                     <resetPwd />
                  </el-tab-pane>
               </el-tabs>
            </el-card>
         </el-col>
      </el-row>
   </div>
</template>

<script setup name="Profile">
import userAvatar from "./userAvatar";
import userInfo from "./userInfo";
import resetPwd from "./resetPwd";
import { getUserProfile } from "@/api/system/user";

const activeTab = ref("resetPwd");
const state = reactive({
  user: {},
  roleGroup: {},
  postGroup: {},
  password: undefined,
  dept: {}
});

function getUser() {
  getUserProfile().then(response => {
    state.user = response.data;
    state.roleGroup = response.roleGroup;
    state.postGroup = response.postGroup;
    state.dept = response.dept;
    state.password = response.password;
  });
};

getUser();
</script>
