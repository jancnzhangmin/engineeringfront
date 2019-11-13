import request from '@/utils/request'

export function getSetting () {
    return request({
        url: '/api/before_create_project',
        method: 'get'
    })
}
