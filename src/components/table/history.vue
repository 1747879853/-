<template>
  <div>
    <Scroll
      :on-reach-bottom="handleReachBottom"
      :distance-to-edge="edge"
    >
      <Table
        id="arg"
        :loading="isloading"
        :columns="columns1"
        :data="data2"
      ></Table>
    </Scroll>
  </div>
</template>
<script>
export default {
  props: ['headnum', 'headtime', 'flag1', 'begin'],
  data() {
    return {
      columns1: [
        {
          title: this.headnum,
          key: 'carnum'
        },
        {
          title: this.headtime,
          key: 'time'
        },
        {
          title: '车辆性质',
          key: 'kind'
        }
      ],
      data2: [],
      data3: [],
      isloading: false,
      edge: -1
    }
  },
  methods: {
    handleReachBottom() {
      return new Promise(resolve => {
        setTimeout(() => {
          this.data3 = this.$store.state.user.historydata.slice(this.data2.length, this.data2.length + 20)
          this.data2 = this.data2.concat(this.data3)
          console.log(this.data3)
          console.log(this.data2)
          this.data3 = []
          resolve()
        }, 100)
      })
    }
  },
  watch: {
    'flag1'() {
      this.data2 = this.$store.state.user.historydata.slice(0, 20)
      this.isloading = false
    },
    'begin'() {
      this.isloading = true
    }
  }
}
</script>
<style scoped>
.ivu-table-header {
  color: #060606;
}
</style>
