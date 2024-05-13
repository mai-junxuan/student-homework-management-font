import request from '@/utils/request'

// 查询参数列表
export function listFileRecord(query) {
  return request({
    url: '/file/list',
    method: 'get',
    params: query
  })
}

export function addFileRecord(data) {
  return request({
    url: '/file',
    method: 'post',
    data: data
  })
}
