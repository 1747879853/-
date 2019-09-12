<template>
  <div>
    <Row>
      <Col span="4"><Input
        search
        enter-button
        @on-search="handlecheck"
        v-model="checkdatanum"
        placeholder="输入车牌号"
      /></Col>
      <Col
        span='2'
        offset="1"
      >
      <Button
        type="primary"
        icon="md-eye"
        @click="handleshow(1)"
      >查看所有信息</Button>
      </Col>
      <Col span='2'>
      <Button
        type="primary"
        @click="changemodle"
        icon="md-person-add"
      >添加信息</Button>
      <Modal
        v-model="modal6"
        title="Title"
        :loading="loading"
        @on-ok="asyncOK"
      >
        <outAddCar
          ref="addform"
          :cardata.sync="cardata"
        >
        </outAddCar>
      </Modal>
      <Modal
        v-model="modal1"
        title="操作确认"
        @on-ok="ok"
        @on-cancel="cancel"
      >
        <p class="tishi">确认删除</p>

      </Modal>
      </Col>
      <Col
        span="5"
        offset="10"
      >
      <Page
        :total="dataCount"
        :page-size="pageSize"
        @on-change="changepage"
        @on-page-size-change="nowPageSize"
        show-total
        show-elevator
      />
      </Col>
    </Row>

    <Table
      :loading="isload"
      :columns="columns"
      :data="nowData"
      height="800"
    >
      <template
        slot-scope="{ row, index }"
        slot="outcarnum"
      >
        <Input
          type="text"
          v-model="editoutcarnum"
          v-if="OuteditIndex === index"
          key="inputcarnum"
        />
        <span
          v-else
          key="inputcarnumelse"
        >{{ row.outcarnum }}</span>
      </template>

      <template
        slot-scope="{ row, index }"
        slot="outcarcolor"
      >
        <Input
          type="text"
          v-model="editoutcarcolor"
          v-if="OuteditIndex === index"
          key="inputcarcolor"
        />
        <span
          v-else
          key="inputcarcolorelse"
        >{{ row.outcarcolor }}</span>
      </template>

      <template
        slot-scope="{ row, index }"
        slot="outcarkind"
      >
        <Input
          type="text"
          v-model="editoutcarkind"
          v-if="OuteditIndex === index"
          key="inputcarkind"
        />
        <span
          v-else
          key="inputcarkindelse"
        >{{ row.outcarkind }}</span>
      </template>

      <template
        slot-scope="{ row, index }"
        slot="outmastername"
      >
        <Input
          type="text"
          v-model="editoutmastername"
          v-if="OuteditIndex === index"
          key="inputmastername"
        />
        <span
          v-else
          key="inputmasternameelse"
        >{{ row.outmastername }}</span>
      </template>

      <template
        slot-scope="{ row, index }"
        slot="outmastertel"
      >
        <Input
          type="text"
          v-model="editoutmastertel"
          v-if="OuteditIndex === index"
          key="inputmastertel"
        />
        <span
          v-else
          key="inputmastertelelse"
        >{{ row.outmastertel }}</span>
      </template>

      <template
        slot-scope="{ row, index }"
        slot="reason"
      >
        <Input
          type="text"
          v-model="editreason"
          v-if="OuteditIndex === index"
          key="inputreason"
        />
        <span
          v-else
          key="inputreasonelse"
        >{{ row.reason }}</span>
      </template>

      <template
        slot-scope="{ row, index }"
        slot="intime"
      >
        <Input
          disabled
          type="text"
          v-model="editintime"
          v-if="OuteditIndex === index"
          key="innputintime"
        />
        <span
          v-else
          key="inputintimeelse"
        >{{ row.intime }}</span>
      </template>
      <template
        slot-scope="{ row, index }"
        slot="outtime"
      >
        <Input
          disabled
          type="text"
          v-model="editouttime"
          v-if="OuteditIndex === index"
          key="inputouttime"
        />
        <span
          v-else
          key="inputouttimeelse"
        >{{ row.outtime }}</span>
      </template>
      <template
        slot-scope="{ row, index }"
        slot="money"
      >
        <Input
          disabled
          type="text"
          v-model="editmoney"
          v-if="OuteditIndex === index"
          key="inputmoney"
        />
        <span
          v-else
          key="inputmoneyelse"
        >{{ row.money }}</span>
      </template>
      <template
        slot-scope="{ row, index }"
        slot="action"
      >
        <div
          v-if="OuteditIndex === index"
          key="caozuo"
        >
          <Button @click="handleSave(index)">保存</Button>
          <Button @click="OuteditIndex = -1">取消</Button>
        </div>
        <div
          v-else
          key="caozuolese"
        >
          <Button
            type="primary"
            @click="handleEdit(row, index)"
          >操作</Button>
          <Button
            type="error"
            @click="changdele(row, index)"
          >删除</Button>

        </div>
      </template>
    </Table>
  </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
import outAddCar from '@/components/form/outAddCar'
export default {
  data() {
    return {
      columns: [
        {
          title: '车牌号',
          slot: 'outcarnum'
        },
        {
          title: '车辆颜色',
          slot: 'outcarcolor'
        },
        {
          title: '车辆类型',
          slot: 'outcarkind'
        },
        {
          title: '车主姓名',
          slot: 'outmastername'
        },
        {
          title: '车主电话',
          slot: 'outmastertel'
        },
        {
          title: '来客事由',
          slot: 'reason'
        },
        {
          title: '进入时间',
          sortable: true,
          slot: 'intime'
        },
        {
          title: '离开时间',
          slot: 'outtime'
        },
        {
          title: '所收费用',
          slot: 'money'
        },
        {
          title: '操作',
          slot: 'action'
        }
      ],
      cardata: [],
      OuteditIndex: -1, // 当前聚焦的输入框的行数
      editoutcarnum: '', // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
      editoutcarcolor: '', // 第二列输入框
      editoutcarkind: '', // 第三列输入框
      editoutmastername: '', // 第四列输入框
      editoutmastertel: '',
      editintime: '',
      editouttime: '',
      editreason: '',
      editmoney: '',
      pageSize: 25, // 每页显示多少条
      dataCount: 0, // 总条数
      pageCurrent: 1, // 当前页
      nowData: [],
      checkdatanum: '',
      deleindex: -1,
      delerow: '',
      nowidex: 0,
      modal6: false,
      modal1: false,
      loading: true,
      flag: 0,
      deletflag: false,
      showed: 0,
      isload: false,
      fixparam: {
        outmastername: '',
        outcarnum: '',
        outmastertel: '',
        outcarcolor: '',
        outcarkind: '',
        reason: '',
        intime: '',
        outtime: '',
        money: ''
      }
    }
  },
  components: {
    outAddCar
  },
  methods: {
    ...mapActions(['getOutCartable', 'checkOutCardata']),
    ...mapMutations(['Outcartablefix', 'Outcardeledata', 'cleanCheckOutData']),
    handleEdit(row, index) {
      this.editoutcarnum = row.outcarnum
      this.editoutcarcolor = row.outcarcolor
      this.editoutcarkind = row.outcarkind
      this.editoutmastername = row.outmastername
      this.editoutmastertel = row.outmastertel
      this.editreason = row.reason
      this.editmoney = row.money
      this.editintime = row.intime
      this.editouttime = row.outtime
      this.OuteditIndex = index
      this.id = !this.id
    },
    handleSave(index) {
      if (this.nowData.length === 1) {
        for (let i = 0; i < this.cardata.length; i++) {
          if (this.cardata[i].outcarnum === this.nowData[0].outcarnum) {
            this.cardata[i].outcarnum = this.editoutcarnum
            this.cardata[i].outcarcolor = this.editoutcarcolor
            this.cardata[i].outcarkind = this.editoutcarkind
            this.cardata[i].outmastername = this.editoutmastername
            this.cardata[i].outmastertel = this.editoutmastertel
            this.cardata[i].reason = this.editreason
          }
        }
      } else {
        this.cardata[index].outcarnum = this.editoutcarnum
        this.cardata[index].outcarcolor = this.editoutcarcolor
        this.cardata[index].outcarkind = this.editoutcarkind
        this.cardata[index].outmastername = this.editoutmastername
        this.cardata[index].outmastertel = this.editoutmastertel
        this.cardata[index].reason = this.editreason
      }
      this.fixparam.reason = this.editreason
      this.fixparam.outmastername = this.editoutmastername
      this.fixparam.outcarnum = this.editoutcarnum
      this.fixparam.intime = this.editintime
      this.fixparam.outmastertel = this.editoutmastertel
      this.fixparam.outcarcolor = this.editoutcarcolor
      this.fixparam.outcarkind = this.editoutcarkind
      this.fixparam.outtime = this.editouttime
      this.fixparam.money = this.editmoney
      this.OuteditIndex = -1
      this.Outcartablefix(this.fixparam, this.outcarnum)
      if (this.showed === 1) {
        setTimeout(() => {
          this.handleshow(0)
        }, 2000)
      }
    },
    ok() {
      this.deletflag = true
      this.handleDele(this.delerow, this.deleindex)
      this.$Message.info('删除成功')
      this.deleindex = -1
      this.delerow = ''
    },
    cancel() {
      this.$Message.info('取消删除')
    },
    changdele(row, index) {
      if (this.$store.state.user.access.length === 1 && this.$store.state.user.access[0] !== 'super_admin') {
        this.$Message.info('权限不足！')
      } else {
        this.deleindex = index
        this.delerow = row
        this.modal1 = true
      }
    },
    handleDele(index) {
      if (this.deletflag === true) {
        if (this.nowData.length === 1) {
          for (let j = 0; j < this.cardata.length; j++) {
            if (this.cardata[j].outcarnum === this.nowData[0].outcarnum) {
              this.cardata.splice(j, 1)
            }
          }
        } else {
          this.cardata.splice(index._index, 1)
        }
        this.nowupdata()
        this.Outcardeledata(this.outcarnum)
        if (this.showed === 1) {
          setTimeout(() => {
            this.handleshow(0)
            this.modal6 = false
          }, 2000)
        }
      }
      this.deletflag = false
      // this.modal1 = false
    },
    changepage(index) {
      // 需要显示开始数据的index,(因为数据是从0开始的，页码是从1开始的，需要-1)
      let _start = (index - 1) * this.pageSize
      // 需要显示结束数据的index
      let _end = index * this.pageSize
      // 截取需要显示的数据
      this.nowData = this.cardata.slice(_start, _end)
      // 储存当前页
      this.pageCurrent = index
      this.nowidex = index
    },
    // 每页显示的数据条数
    nowPageSize(index) {
      // 实时获取当前需要显示的条数
      this.pageSize = index
    },
    asyncOK() {
      this.$refs.addform.submit()
      this.nowupdata()
      if (this.showed === 1) {
        setTimeout(() => {
          this.handleshow(0)
        }, 2000)
      }
      setTimeout(() => {
        this.modal6 = false
        this.$Message.info('添加成功')
      }, 1500)
    },
    nowupdata() {
      this.dataCount = this.cardata.length
      this.nowData = []
      for (let i = 0; i < this.pageSize && i < this.cardata.length; i++) {
        this.nowData.push(this.cardata[i])
      }
    },
    changemodle() {
      this.modal6 = true
    },
    handleshow(loadflag) {
      if (loadflag === 1) {
        this.isload = true
      }
      this.showed = 1
      this.getOutCartable()
      setTimeout(() => {
        this.cardata = this.$store.state.user.Outcartable
        this.dataCount = this.cardata.length
        this.nowData = []
        for (let i = 0; i < this.pageSize && i < this.cardata.length; i++) {
          this.nowData.push(this.cardata[i])
        }
        this.isload = false
      }, 2000)
    },
    handlecheck() {
      this.checkOutCardata(this.checkdatanum)
      this.dataCount = 1
      this.nowData = []
      this.nowData.push(this.$store.state.user.checkOutData[0])

      this.cleanCheckOutData()
    }
  },
  watch: {},
  mounted() {
    this.$nextTick(() => {
      if (this.flag === 0) {
        this.getOutCartable()
        this.flag = 1
      }
    })
  },
  computed: {}
}
</script>
<style scoped>
td {
  white-space: nowrap;
}
.tishi {
  font-size: 18px;
  font-family: 'Helvetica Neue';
}
</style>
