import Mock from 'mockjs'
var Random = Mock.Random
function getMoble() {
  var prefixArray = [
    '130',
    '131',
    '132',
    '133',
    '135',
    '137',
    '138',
    '170',
    '187',
    '189'
  ]

  var i = parseInt(10 * Math.random())

  var prefix = prefixArray[i]

  for (var j = 0; j < 8; j++) {
    prefix = prefix + Math.floor(Math.random() * 10)
  }

  return prefix
}

function stairnum() {
  var stairnums = [
    '1号楼',
    '2号楼',
    '3号楼',
    '4号楼',
    '5号楼',
    '6号楼',
    '7号楼',
    '8号楼',
    '9号楼',
    '10号楼',
    '11号楼',
    '12号楼'
  ]
  return Random.pick(stairnums)
}
function juti() {
  var jutis = [
    '101室',
    '102室',
    '201室',
    '202室',
    '301室',
    '302室',
    '401室',
    '402室',
    '501室',
    '502室',
    '601室',
    '602室',
    '701室',
    '702室',
    '801室',
    '802室',
    '901室',
    '902室',
    '1001室',
    '1002室'
  ]
  return Random.pick(jutis)
}
function masteraddress() {
  return stairnum() + juti()
}
function carNum() {
  var car = ['鲁A', '鲁B', '京A']
  return Random.pick(car) + Random.natural(1000, 9999)
}
function color() {
  var color = ['黑', '黄', '白', '红', '银白', '绿']
  return Random.pick(color)
}
function carkind() {
  var carkind = [
    '阿斯顿·马丁',
    '奥迪',
    '阿尔法罗米欧',
    '宝马',
    '奔腾',
    '本田',
    '比亚迪',
    '标致',
    '别克',
    '宾利',
    '北汽',
    '布嘉迪',
    '宝骏',
    '昌河',
    '长安',
    '长城',
    '长丰',
    '川汽野马',
    '大发',
    '大众',
    '道奇',
    '东南',
    '东风',
    '帝豪',
    '东风风神',
    '法拉利',
    '菲亚特',
    '丰田',
    '福特',
    '福田',
    '广汽',
    '海马',
    '悍马',
    '红旗',
    '华普',
    '华泰',
    '黄海',
    '哈飞',
    '吉利',
    'Jeep吉普',
    '江淮',
    '捷豹',
    '金杯',
    '吉奥',
    '吉利全球鹰',
    '江铃',
    '凯迪拉克',
    '克莱斯勒',
    '柯尼赛格',
    '开瑞',
    '兰博基尼',
    '劳斯莱斯',
    '雷克萨斯',
    '雷雷诺',
    '力帆',
    '莲花',
    '林肯',
    '铃木',
    '陆风',
    '路虎',
    '莲花汽车',
    '理念',
    'MG',
    '马自达',
    '玛莎拉蒂',
    '迈巴赫',
    'MINI',
    '纳智捷',
    '讴歌',
    '欧宝',
    '帕加尼',
    '奇瑞',
    '日产',
    '荣威',
    '瑞麒',
    '萨博',
    '三菱',
    '双环',
    '双龙',
    '斯巴鲁',
    '斯柯达',
    '世爵',
    'smart',
    '威兹曼',
    '沃尔沃',
    '威麟',
    '五菱汽车',
    '夏利',
    '现代',
    '雪佛兰',
    '雪铁龙',
    '西亚特',
    '永源',
    '英菲尼迪',
    '英伦',
    '一汽',
    '中华',
    '中兴',
    '众泰'
  ]
  return Random.pick(carkind)
}
function reason() {
  var inreason = ['拉货', '拜访朋友', '外卖', '接人', '送人', '其他']
  return Random.pick(inreason)
}
function temp() {
  let cartableData = []
  for (let i = 0; i < 500; i++) {
    let newObject = {
      masterid: Random.id(), //  随机身份证号
      mastername: Random.cname(), // 随机生成一个常见的中文姓名
      carnum: carNum(), // 随机车牌号
      masteraddress: masteraddress(), // 随机地址
      mastertel: getMoble(), // 随机电话号
      carcolor: color(), // 随机颜色
      carkind: carkind()
    }
    cartableData.push(newObject)
  }

  return {
    cartabledata: cartableData
  }
}
function Outcar() {
  let OutcarData = []
  for (let i = 0; i < 500; i++) {
    let newobj = {
      outcarnum: carNum(),
      outcarcolor: color(),
      outcarkind: carkind(),
      outmastername: Random.cname(),
      outmastertel: getMoble(),
      reason: reason(),
      intime: Random.time('HH: mm: ss'),
      outtime: Random.time('HH: mm: ss'),
      money: '6'
    }
    OutcarData.push(newobj)
  }

  for (let j = 0; j < OutcarData.length; j++) {
    let year = Random.date()
    year = year.substring(4)
    let str = OutcarData[j].intime
    OutcarData[j].intime = ''
    OutcarData[j].intime = '2018' + year + ' ' + str
    str = OutcarData[j].outtime
    OutcarData[j].outtime = ''
    OutcarData[j].outtime = '2018' + year + ' ' + str
  }

  return {
    Outcardata: OutcarData
  }
}
var cartabledata = ''
export const cartable1 = req => {
  cartabledata = temp()
  return cartabledata
}
var Outcardata = ''
export const OutcarData = req => {
  Outcardata = Outcar()

  return Outcardata
}
