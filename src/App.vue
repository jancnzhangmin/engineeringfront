<template>
    <div id="app">
        <div v-transfer-dom>
            <loading v-model="isLoading"></loading>
        </div>
        <transition
            @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
            :name="viewTransition"
        >
            <router-view class="router-view" style="touch-action: none;"></router-view>
        </transition>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { Loading, TransferDom } from 'vux'

export default {
    name: 'app',
    directives: {
        TransferDom
    },
    components: {
        Loading
    },
    computed: {
        ...mapState({
            route: state => state.route,
            isLoading: state => state.vux.isLoading,
            direction: state => state.vux.direction
        }),
        viewTransition () {
            if (!this.direction) return ''
            return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
        }
    }
}
</script>

<style lang="less">
.router-view {
    position: absolute;
    height: 100%;
    width: 100%;
    background: #f6f6f6;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
    will-change: transform;
    transition: all 500ms;
    height: 100%;
    top: 0px;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
}
.vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
</style>
