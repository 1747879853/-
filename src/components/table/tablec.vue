<template>
    <Table stripe :columns="columns1" :data="data1"></Table>
</template>
<script>
export default {
  data () {
    return {
      columns1: [
        {
          title: 'A出口',
          key: 'name'
        }
      ],
      data1: [
        {
          name: '车牌号：'
        },
        {
          name: '京Q686K3'
        },
        {
          name: '车辆类型：'
        },
        {
          name: '业主车辆'
        },
        {
          name: '进入时间:'
        },
        {
          name: '2019-07-22 12:40：30'
        }
      ]
    }
  }
}
</script>
