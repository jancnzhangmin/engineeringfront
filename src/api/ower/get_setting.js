import request from '@/utils/request'

export function get_setting() {
  return request({
    url: '/api/before_create_project',
    method: 'get'
  })
}