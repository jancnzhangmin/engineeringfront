<template>
    <div>
        <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" />
        <van-cell-group style="margin-top:10px;">
            <van-field label="姓名" />
            <van-field label="手机" />
        </van-cell-group>
        <van-button color="#4679cc" block style="margin-top:20px;"
            >保存</van-button
        >
    </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Field, Cell, CellGroup, Button } from 'vant'
import { getSetting } from '@/api/ower/get_setting'
Vue.use(NavBar)
Vue.use(Field)
Vue.use(Cell).use(CellGroup)
Vue.use(Button)
export default {
    methods: {
        onClickLeft () {
            this.$router.go(-1)
        },
        getuser () {
            getSetting().then(data => {
                alert(data)
            })
        }
    },
    created () {
        this.getuser()
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
