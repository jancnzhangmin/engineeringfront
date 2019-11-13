import axios from 'axios'
import { Dialog } from 'vant'
import global from '../store/global.js'
const service = axios.create({
    baseURL: global.baseURL, // process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // 跨域请求时发送cookie
    timeout: 5000 // 超时时间
})

service.interceptors.request.use(
    config => {
        config.headers['UserToken'] = global.userinfo.usertoken
        config.headers['currentProject'] = global.userinfo.currentProject
        return config
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.status !== 200) {
            Dialog({ message: res.msg })
        } else {
            return res
        }
    }
)

export default service
