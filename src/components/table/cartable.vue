<template>
  <div>
    <Row>
      <Col span="4"><Input
        search
        enter-button
        @on-search="handlecheck"
        v-model="checkdatanum"
        placeholder="输入车牌号/业主身份证号"
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
        <addform ref="addform"></addform>
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
      :loading="isloading"
      :columns="columns"
      :data="nowData"
      height="800"
    >
      <template
        slot-scope="{ row, index }"
        slot="carnum"
      >
        <Input
          type="text"
          v-model="editcarnum"
          v-if="editIndex === index"
        />
        <span v-else>{{ row.carnum }}</span>
      </template>

      <template
        slot-scope="{ row, index }"
        slot="carcolor"
      >
        <Input
          type="text"
          v-model="editcarcolor"
          v-if="editIndex === index"
        />
        <span v-else>{{ row.carcolor }}</span>
      </template>

      <template
        slot-scope="{ row, index }"
        slot="carkind"
      >
        <Input
          type="text"
          v-model="editcarkind"
          v-if="editIndex === index"
        />
        <span v-else>{{ row.carkind }}</span>
      </template>

      <template
        slot-scope="{ row, index }"
        slot="mastername"
      >
        <Input
          type="text"
          v-model="editmastername"
          v-if="editIndex === index"
        />
        <span v-else>{{ row.mastername }}</span>
      </template>

      <template
        slot-scope="{ row, index }"
        slot="mastertel"
      >
        <Input
          type="text"
          v-model="editmastertel"
          v-if="editIndex === index"
        />
        <span v-else>{{ row.mastertel }}</span>
      </template>

      <template
        slot-scope="{ row, index }"
        slot="masteraddress"
      >
        <Input
          type="text"
          v-model="editmasteraddress"
          v-if="editIndex === index"
        />
        <span v-else>{{ row.masteraddress }}</span>
      </template>

      <template
        slot-scope="{ row, index }"
        slot="masterid"
      >
        <Input
          type="text"
          v-model="editmasterid"
          v-if="editIndex === index"
        />
        <span v-else>{{ row.masterid }}</span>
      </template>

      <template
        slot-scope="{ row, index }"
        slot="action"
      >
        <div v-if="editIndex === index">
          <Button @click="handleSave(index)">保存</Button>
          <Button @click="editIndex = -1">取消</Button>
        </div>
        <div v-else>
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
import addform from '@/components/form/addcarform'
export default {
  data() {
    return {
      columns: [
        {
          title: '车牌号',
          slot: 'carnum'
        },
        {
          title: '车辆颜色',
          slot: 'carcolor'
        },
        {
          title: '车辆类型',
          slot: 'carkind'
        },
        {
          title: '车主姓名',
          slot: 'mastername'
        },
        {
          title: '车主电话',
          slot: 'mastertel'
        },
        {
          title: '车主住址',
          slot: 'masteraddress'
        },
        {
          title: '车主身份证号码',
          slot: 'masterid'
        },
        {
          title: '操作',
          slot: 'action'
        }
      ],
      cardata: [],
      editIndex: -1, // 当前聚焦的输入框的行数
      editcarnum: '', // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
      editcarcolor: '', // 第二列输入框
      editcarkind: '', // 第三列输入框
      editmastername: '', // 第四列输入框
      editmastertel: '',
      editmasteraddress: '',
      editmasterid: '',
      pageSize: 25, // 每页显示多少条
      dataCount: 0, // 总条数
      pageCurrent: 1, // 当前页
      nowData: [],
      checkdatanum: '',
      nowidex: 0,
      deleindex: -1,
      delerow: '',
      modal6: false,
      modal1: false,
      loading: true,
      isloading: false,
      flag: 0,
      showed: 0,
      fixparam: {
        masterid: '',
        mastername: '',
        carnum: '',
        masteraddress: '',
        mastertel: '',
        carcolor: '',
        carkind: ''
      }
    }
  },
  components: {
    addform
  },
  methods: {
    ...mapActions(['getCartable', 'checkCardata']),
    ...mapMutations(['cartablefix', 'cardeledata', 'cleanCheckData']),
    handleEdit(row, index) {
      this.editcarnum = row.carnum
      this.editcarcolor = row.carcolor
      this.editcarkind = row.carkind
      this.editmastername = row.mastername
      this.editmastertel = row.mastertel
      this.editmasteraddress = row.masteraddress
      this.editmasterid = row.masterid
      this.editIndex = index
      this.id = !this.id
    },
    handleSave(index) {
      if (this.nowData.length === 1) {
        for (let i = 0; i < this.cardata.length; i++) {
          if (this.cardata[i].carnum === this.nowData[0].carnum) {
            this.cardata[i].carnum = this.editcarnum
            this.cardata[i].carcolor = this.editcarcolor
            this.cardata[i].carkind = this.editcarkind
            this.cardata[i].mastername = this.editmastername
            this.cardata[i].mastertel = this.editmastertel
            this.cardata[i].masteraddress = this.editmasteraddress
            this.cardata[i].masterid = this.editmasterid
          }
        }
      } else {
        this.cardata[index].carnum = this.editcarnum
        this.cardata[index].carcolor = this.editcarcolor
        this.cardata[index].carkind = this.editcarkind
        this.cardata[index].mastername = this.editmastername
        this.cardata[index].mastertel = this.editmastertel
        this.cardata[index].masteraddress = this.editmasteraddress
        this.cardata[index].masterid = this.editmasterid
      }
      this.fixparam.masterid = this.editmasterid
      this.fixparam.mastername = this.editmastername
      this.fixparam.carnum = this.editcarnum
      this.fixparam.masteraddress = this.editmasteraddress
      this.fixparam.mastertel = this.editmastertel
      this.fixparam.carcolor = this.editcarcolor
      this.fixparam.carkind = this.editcarkind
      this.editIndex = -1
      this.cartablefix(this.fixparam, this.carnum)
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
      this.deleindex = index
      this.delerow = row
      this.modal1 = true
    },
    handleDele(index) {
      if (this.deletflag === true) {
        if (this.nowData.length === 1) {
          for (let j = 0; j < this.cardata.length; j++) {
            if (this.cardata[j].carnum === this.nowData[0].carnum) {
              this.cardata.splice(j, 1)
            }
          }
        } else {
          this.cardata.splice(index._index, 1)
        }
        this.nowupdata()
        this.cardeledata(this.carnum)
        if (this.showed === 1) {
          setTimeout(() => {
            this.handleshow(0)
            this.modal6 = false
          }, 2000)
        }
      }
      this.deletflag = false
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
        this.isloading = true
      }
      this.showed = 1
      this.getCartable()
      setTimeout(() => {
        this.cardata = this.$store.state.user.cartable
        this.dataCount = this.cardata.length
        this.nowData = []
        for (let i = 0; i < this.pageSize && i < this.cardata.length; i++) {
          this.nowData.push(this.cardata[i])
        }
        this.isloading = false
      }, 2000)
    },
    handlecheck() {
      this.checkCardata(this.checkdatanum)
      this.dataCount = 1
      this.nowData = []
      this.nowData.push(this.$store.state.user.checkData[0])

      this.cleanCheckData()
    }
  },
  watch: {},
  mounted() {
    this.$nextTick(() => {
      if (this.flag === 0) {
        this.getCartable()
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
