import request from '@/utils/request'

export function createNotice (data) {
    return request({
        url: '/api/create_notice',
        method: 'post',
        data
    })
}

export function getNoticeList (page) {
    return request({
        url: '/api/get_notice_list',
        method: 'get',
        params: {
            page: page
        }
    })
}

export function showNotice (data) {
    return request({
        url: '/api/show_notice',
        method: 'get',
        params: {
            noticeid: data
        }
    })
}

export function updateNotice (data) {
    return request({
        url: '/api/update_notice',
        method: 'post',
        data
    })
}

export function deleteNotice (data) {
    return request({
        url: '/api/delete_notice',
        method: 'delete',
        params: {
            noticeid: data
        }
    })
}