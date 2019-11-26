import request from '@/utils/request'

export function beforeCreateOrder () {
    return request({
        url: '/api/before_create_order',
        method: 'get'
    })
}

export function createOrder (data) {
    return request({
        url: '/api/create_order',
        method: 'post',
        data
    })
}

export function getOrderList (page) {
    return request({
        url: '/api/get_order_list',
        method: 'get',
        params: {
            page: page
        }
    })
}
