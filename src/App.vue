<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<style>
    @import "../static/css/main.css";
   /*  @import "../static/css/color-dark.css"; */    /*深色主题*/
    @import "../static/css/theme-green/color-green.css"; 
    body {
		margin: 0px;
		padding: 0px;
	
		background-size: cover;*/
		// background: #1F2D3D;
		font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
		font-size: 14px;
		-webkit-font-smoothing: antialiased;
	}
	
	#app {
		background: url(./assets/images/h60.jpg) center !important;
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
	}
	
	.el-submenu [class^=fa] {
		vertical-align: baseline;
		margin-right: 10px;
	}
	
	.el-menu-item [class^=fa] {
		vertical-align: baseline;
		margin-right: 10px;
	}
	
	.toolbar {
		background: #f2f2f2;
		padding: 10px;
	
		margin:10px 0px;
		.el-form-item {
			margin-bottom: 10px;
		}
	}
</style>