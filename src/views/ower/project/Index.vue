<template>
    <div>
        <van-nav-bar
            title="当前项目"
            left-arrow
            @click-left="onClickLeft"
            :right-text="showeditlable"
            @click-right="clickEdit()"
            fixed
        />
        <van-radio-group
            v-model="radio"
            class="content"
            :class="edit ? '' : 'fullbottomcontent'"
        >
            <van-cell-group>
                <van-cell
                    :title="item.title"
                    clickable
                    @click="clickItem(item)"
                    v-for="item in list"
                    :key="item.id"
                >
                    <van-radio
                        slot="icon"
                        :name="item.id"
                        style="margin-right:10px;"
                        :checked-color="edit ? '#ec7259' : '#1989fa'"
                    />
                    <span slot="label" class="van-multi-ellipsis--l2">{{
                        item.content
                    }}</span>
                </van-cell>
            </van-cell-group>
        </van-radio-group>

        <van-button
            v-show="!this.edit"
            block
            to="/ower/currentproject/new"
            color="#4679cc"
            style="position: fixed;bottom: 0px;"
            >新项目</van-button
        >
    </div>
</template>

<script>
import Vue from 'vue'
import {
    NavBar,
    Button,
    RadioGroup,
    Radio,
    Cell,
    CellGroup
} from 'vant'
Vue.use(NavBar)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Cell).use(CellGroup)
Vue.use(Button)
export default {
    data () {
        return {
            radio: 1,
            edit: false,
            showeditlable: '编辑',
            list: [
                {
                    id: 1,
                    title: '项目1',
                    content: '1这是新项目的描述信息，这是新项目的描述信息，这是新项目的描述信息，这是新项目的描述信息，这是新项目的描述信息,这是新项目的描述信息,这是新项目的描述信息'
                },
                {
                    id: 2,
                    title: '项目2',
                    content: '2这是新项目的描述信息，这是新项目的描述信息，这是新项目的描述信息，这是新项目的描述信息，这是新项目的描述信息,这是新项目的描述信息,这是新项目的描述信息'
                },
                {
                    id: 3,
                    title: '项目3',
                    content: '3这是新项目的描述信息，这是新项目的描述信息，这是新项目的描述信息，这是新项目的描述信息，这是新项目的描述信息,这是新项目的描述信息,这是新项目的描述信息'
                }
            ]
        }
    },
    methods: {
        onClickLeft () {
            this.$router.go(-1)
        },
        clickEdit () {
            if (this.edit) {
                this.edit = false
                this.showeditlable = '编辑'
            } else {
                this.edit = true
                this.showeditlable = '取消编辑'
            }
        },
        clickItem () {
            this.radio = '1'
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
.content {
    margin-top: 56px;
    background-color: #f6f6f6;
}
.fullbottomcontent {
    padding-bottom: 54px;
}
</style>