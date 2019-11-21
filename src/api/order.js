import request from '@/utils/request'

export function beforeCreateOrder () {
    return request({
        url: '/api/before_create_order',
        method: 'get'
    })
}

export function CreateOrder (data) {
    return request({
        url: '/api/create_project',
        method: 'post',
        data
    })
}

export function getOrder (data) {
    return request({
        url: '/api/get_order',
        method: 'post',
        data
    })
}
