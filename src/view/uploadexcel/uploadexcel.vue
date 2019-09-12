<template>
  <div class="excel">
    <Row>
      <Col span="4">
      <DatePicker
        v-model="value"
        type="daterange"
        split-panels
        placeholder="选择报表范围"
        style="width: 200px"
      ></DatePicker>
      </Col>
      <Button
        type="primary"
        @click="showdata"
      >查看</Button>
      <Col span="2">
      <Button
        type="success"
        @click="handleDownload"
      >导出报表</Button>
      </Col>
      <Col span="2">
      </Col>
      <Col span="16">
      </Col>
    </Row>
    <Row>
      <Col span="24">
      <div style="height=800px">
        <Table
          height="800"
          id="arg"
          :loading="isloading"
          :columns="columns1"
          :data="data2"
        ></Table>
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'exportExcel',
  data() {
    return {
      list: null,
      listLoading: true,
      downloadLoading: false,
      filename: '',
      autoWidth: true,
      value: '',
      isloading: false,
      edge: -1,
      columns1: [
        {
          title: '车牌号',
          key: 'carnum'
        },
        {
          title: '操作时间',
          key: 'time'
        },
        {
          title: '操作人员',
          key: 'man'
        },
        {
          title: '收费金额',
          key: 'money'
        }
      ],
      data2: [],
      data3: [],
      arr: []
    }
  },
  created() {
    this.getexcel()
  },
  methods: {
    ...mapActions(['getexcel']),
    showdata() {
      // document.getElementById("dd").style.height = "800px";
      this.data3 = this.$store.state.user.exceldata
      if ((this.value[0].toString()).length !== 0) {
        this.data2 = []
        for (let i = 0; i < this.data3.length; i++) {
          if (parseInt(this.data3[i].time.substring(0, 4)) > parseInt(this.value[0].getFullYear()) && parseInt(this.value[1].getFullYear()) > this.data3[i].time.substring(0, 4)) {
            this.data2.push(this.data3[i])
          }
          if (parseInt(this.data3[i].time.substring(0, 4)) === parseInt(this.value[0].getFullYear()) || parseInt(this.value[1].getFullYear()) === this.data3[i].time.substring(0, 4)) {
            if ((parseInt(this.data3[i].time.substring(5, 6) * 10) + parseInt(this.data3[i].time.substring(6, 7))) > (parseInt(this.value[0].getMonth()) + 1) && (parseInt(this.value[1].getMonth()) + 1) > (parseInt(this.data3[i].time.substring(5, 6) * 10) + parseInt(this.data3[i].time.substring(6, 7)))) {
              this.data2.push(this.data3[i])
            }
            if ((parseInt(this.data3[i].time.substring(5, 6) * 10) + parseInt(this.data3[i].time.substring(6, 7))) === (parseInt(this.value[0].getMonth()) + 1) || (parseInt(this.value[1].getMonth()) + 1) === (parseInt(this.data3[i].time.substring(5, 6) * 10) + parseInt(this.data3[i].time.substring(6, 7)))) {
              if ((parseInt(this.data3[i].time.substring(8, 9) * 10) + parseInt(this.data3[i].time.substring(9, 10))) >= parseInt(this.value[0].getDate()) && parseInt(this.value[1].getDate()) >= (parseInt(this.data3[i].time.substring(8, 9) * 10) + parseInt(this.data3[i].time.substring(9, 10)))) {
                this.data2.push(this.data3[i])
              }
            }
          }
        }
      } else {
        this.$Message.info('请选择时间范围！')
      }
    },
    handleDownload() {
      // this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['车牌号', '操作时间', '操作人员', '所收金额']
        const filterVal = ['carnum', 'time', 'man', 'money']
        const list = this.data2
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        return v[j]
      }))
    }
  }
  /*  fetchData() {
    this.listLoading = true
    fetchList().then(response => {
      this.list = response.data.items
      this.listLoading = false
    })
  },
  handleDownload() {
    this.downloadLoading = true
    import('@/vendor/Export2Excel').then(excel => {
      const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
      const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time']
      const list = this.list
      const data = this.formatJson(filterVal, list)
      excel.export_json_to_excel({
        header: tHeader,
        data,
        filename: this.filename,
        autoWidth: this.autoWidth
      })
      this.downloadLoading = false
    })
  },
  formatJson(filterVal, jsonData) {
    return jsonData.map(v => filterVal.map(j => {
      if (j === 'timestamp') {
        return parseTime(v[j])
      } else {
        return v[j]
      }
    }))
  } */

}
</script>
<style >
.ivu-scroll-container {
  height: 800px;
}
</style>
