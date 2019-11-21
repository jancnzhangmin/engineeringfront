import request from '@/utils/request'

export function getProjectList (page) {
    return request({
        url: '/api/get_project_list',
        method: 'get',
        params: {page}
    })
}
