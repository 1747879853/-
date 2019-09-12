import axios from '@/libs/api.request'
export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  }
  return axios.request({
    url: 'login',
    data,
    method: 'post'
  })
}
export const getUserInfo = token => {
  return axios.request({
    url: 'get_info',
    params: {
      token
    },
    method: 'get'
  })
}
// 查看
export const getcartable = () => {
  return axios.request({
    url: 'get_cartable',
    method: 'post'
  })
}
// 增加
export const submitform = formdata => {
  return axios.request({
    url: 'submitform',
    formdata,
    method: 'post'
  })
}
// 查询
export const checkcardata = id => {
  return axios.request({
    url: 'checkcardata'
  })
}
// 删除信息
export const cardatadele = carid => {
  return axios.request({
    url: 'delecardata',
    carid,
    method: 'post'
  })
}
// 修改
export const fixcardata = carid => {
  return axios.request({
    url: 'fixcardata',
    carid,
    method: 'post'
  })
}
// 外来车辆
// 查看
export const getOutcartable = () => {
  return axios.request({
    url: 'getOutcartable',
    method: 'post'
  })
}
// 增加
export const Outsubmitform = formdata => {
  return axios.request({
    url: 'Outsubmitform',
    formdata,
    method: 'post'
  })
}
// 查询
export const checkOutcardata = id => {
  return axios.request({
    url: 'checkOutcardata'
  })
}
// 删除信息
export const Outcardatadele = carid => {
  return axios.request({
    url: 'deleOutcardata',
    carid,
    method: 'post'
  })
}
// 修改
export const fixOutcardata = carid => {
  return axios.request({
    url: 'fixOutcardata',
    carid,
    method: 'post'
  })
}
export const getuserdata = () => {
  return axios.request({
    url: 'getuserdata',
    method: 'post'
  })
}
export const gethistory = () => {
  return axios.request({
    url: 'gethistory',
    method: 'post'
  })
}
export const getexcel = () => {
  return axios.request({
    url: 'getexcel',
    method: 'post'
  })
}
