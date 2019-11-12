import request from '@/utils/request'

export function before_create_order() {
  return request({
    url: '/api/before_create_order',
    method: 'get'
  })
}

export function create_order(data) {
    return request({
      url: '/api/create_order',
      method: 'post',
      data
    })
  }