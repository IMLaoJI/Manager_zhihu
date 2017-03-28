<template>
    <div class="sidebar" >
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo"  unique-opened router>
            <el-menu-item index="readme">
                <i class="el-icon-setting"></i>开发说明
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>用户及新闻管理</template>
                <el-menu-item index="basetable">待办</el-menu-item>
                <el-menu-item index="vuetable">新闻列表</el-menu-item>
                   <el-menu-item index="users">用户</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-date"></i>编辑</template>
                <el-menu-item index="baseform">公告</el-menu-item>
                <el-menu-item index="vueeditor">新闻</el-menu-item>
                <el-menu-item index="markdown">markdown</el-menu-item>
                <el-menu-item index="upload">文件上传</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title"><i class="el-icon-star-on"></i>待增加</template>
                
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        
        computed:{
            onRoutes(){
                console.log(this.$route.path);
                return this.$route.path.replace('/','');
            },
           doneTodosCount () {
                return this.$store.getters.sidebar;
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
        
    }
    .sidebar > ul {
        height:100%;
    }
    
</style>
