<template>
    <div>
        <van-nav-bar
            title="新建项目"
            left-arrow
            @click-left="onClickLeft"
            right-text="保存"
        />
        <project-form />
    </div>
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant'
import ProjectForm from './components/ProjectForm'
Vue.use(NavBar)

export default {
    components: {
        ProjectForm
    },
    methods: {
        onClickLeft () {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.van-nav-bar .van-icon {
    color: #969799;
    font-size: 24px;
    cursor: pointer;
}
.van-nav-bar__title {
    font-size: 17px;
    text-transform: capitalize;
}
</style>