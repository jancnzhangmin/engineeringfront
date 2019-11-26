<template>
    <div>
        <van-cell-group style="margin-top:10px;">
            <van-field
                required
                label="公告名称"
                v-model="data.name"
                placeholder="请输入公告名称"
                :error-message="data.name == '' ? '公告名称不能为空' : ''"
            />
            <van-field
                rows="10"
                type="textarea"
                v-model="data.notice"
                placeholder="正文"
            />
        </van-cell-group>
        <van-button
            color="#4679cc"
            @click="onCommit"
            block
            style="margin-top:20px;"
            :disabled="this.data.name == ''"
            >保存</van-button
        >
    </div>
</template>

<script>
import Vue from 'vue'
import { Field, Cell, CellGroup, Button } from 'vant'
import { createNotice, showNotice, updateNotice } from '@/api/ower/notice'

Vue.use(Field)
Vue.use(Cell).use(CellGroup)
Vue.use(Button)
export default {
    props: ['id'],
    data () {
        return {
            data: {
                noticeid: '0',
                name: '',
                notice: ''
            }
        }
    },
    methods: {
        onCommit () {
            if (parseInt(this.id) == 0) {
                createNotice(this.data).then(res => {
                    if (res.status === 200) {
                        this.$router.go(-1)
                    }
                })
            } else {
                updateNotice(this.data).then(res => {
                    if (res.status === 200) {
                        this.$router.go(-1)
                    }
                })
            }
        }
    },
    created () {
        if (parseInt(this.id) > 0) {
            showNotice(this.id).then(data => {
                this.data.noticeid = data.result.noticeid
                this.data.name = data.result.name
                this.data.notice = data.result.notice
            })
        }
    }
}
</script>