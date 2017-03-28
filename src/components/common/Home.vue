<template>
    <div class="wrapper" >
        <v-head></v-head>
        <v-sidebar v-show="sidebar" ></v-sidebar>
        <div class="content">
            <transition name="move" mode="out-in">
            <router-view>
            </router-view>
        </transition>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import {mapGetters} from 'vuex'
    export default {
        	computed:mapGetters([
			'sidebar'
		]),
        components:{
            vHead, vSidebar
        }
    }
</script>
<style >
    .wrapper{
        transition: all .99s ease;
    }
</style>
