import Mock from 'mockjs'
import { login, getUserInfo } from './login'
import { cartable1, OutcarData } from './cartable'
import { userdata1 } from './userdata'
import { historyData } from './history'
import { excelData } from './excel'
Mock.setup({
  timeout: 2000 // 设置延迟响应，模拟向后端请求数据
})
Mock.mock(
  'https://www.easy-mock.com/mock/5add9213ce4d0e69998a6f51/iview-admin/login',
  login
)
Mock.mock(/\/get_info/, getUserInfo)
Mock.mock(/\/get_cartable/, cartable1)
Mock.mock(/\/getOutcartable/, OutcarData)
Mock.mock(/\/getuserdata/, userdata1)
Mock.mock(/\/gethistory/, historyData)
Mock.mock(/\/getexcel/, excelData)
export default Mock
