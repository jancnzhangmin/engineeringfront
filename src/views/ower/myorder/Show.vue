<template>
    <div>
        <van-nav-bar
            fixed
            title="订单详情"
            left-arrow
            @click-left="onClickLeft"
            right-text="编辑"
        />
    </div>
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant'

Vue.use(NavBar)

export default {
    props: ['id'],
    data () {
        return {
            ordername: ''
        }
    },
    methods: {
        onClickLeft () {
            this.$router.go(-1)
        }
    },
    created () {
        alert(this.id)
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