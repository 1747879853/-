<template>
  <div>
    <Row>
      <Col span="2">
      <Button
        type="primary"
        icon="md-eye"
        @click="show"
      >查看管理员</Button>
      </Col>
      <Col span="2">
      <Button
        type="primary"
        icon="md-add"
        @click="addadmin"
      >添加管理员</Button>
      <Modal
        v-model="modal1"
        title="Common Modal dialog box title"
        @on-ok="ok"
        @on-cancel="cancel"
        :loading="loading"
      >
        <addusercard ref="adduser"></addusercard>
      </Modal>
      </Col>
      <Col span='20'>
      </Col>
    </Row>
    <Row>
      <p style="height:1px"></p>
      <Divider />
    </Row>
    <Row :gutter="16">
      <Col span="6">
      <div>
        <usercard
          ref="usercard0"
          id="0"
          @success="updata"
        ></usercard>
      </div>
      </Col>
      <Col span="6">
      <div>
        <usercard
          ref="usercard1"
          id="1"
          @success="updata"
        ></usercard>
      </div>
      </Col>
      <Col span="6">
      <div>
        <usercard
          ref="usercard2"
          id="2"
          @success="updata"
        ></usercard>
      </div>
      </Col>
      <Col span="6">
      <div>
        <usercard
          ref="usercard3"
          id="3"
          @success="updata"
        ></usercard>
      </div>
      </Col>
    </Row>
    <Row :gutter="16">
      <Col span="6">
      <div>
        <usercard
          ref="usercard4"
          id="4"
          @success="updata"
        ></usercard>
      </div>
      </Col>
      <Col span="6">
      <div>
        <usercard
          ref="usercard5"
          id="5"
          @success="updata"
        ></usercard>
      </div>
      </Col>
      <Col span="6">
      <div>
        <usercard
          ref="usercard6"
          id="6"
          @success="updata"
        ></usercard>
      </div>
      </Col>
      <Col span="6">
      <div>
        <usercard
          ref="usercard7"
          id="7"
          @success="updata"
        ></usercard>
      </div>
      </Col>
    </Row>
    <Row :gutter="16">
      <Col span="6">
      <div>
        <usercard
          ref="usercard8"
          id="8"
          @success="updata"
        ></usercard>
      </div>
      </Col>
      <Col span="6">
      <div>
        <usercard
          ref="usercard9"
          id="9"
          @success="updata"
        ></usercard>
      </div>
      </Col>
      <Col span="6">
      <div>
        <usercard
          ref="usercard10"
          id="10"
          @success="updata"
        ></usercard>
      </div>
      </Col>
      <Col span="6">
      <div>
        <usercard
          ref="usercard11"
          id="11"
          @success="updata"
        ></usercard>
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
import usercard from '@/components/usercard/usercard'
import addusercard from '@/components/usercard/addusercard'
export default {
  components: {
    usercard,
    addusercard
  },
  methods: {
    show() {
      this.$refs.usercard0.showdata()
      this.$refs.usercard1.showdata()
      this.$refs.usercard2.showdata()
      this.$refs.usercard3.showdata()
      this.$refs.usercard4.showdata()
      this.$refs.usercard5.showdata()
      this.$refs.usercard6.showdata()
      this.$refs.usercard7.showdata()
      this.$refs.usercard8.showdata()
      this.$refs.usercard9.showdata()
      this.$refs.usercard10.showdata()
      this.$refs.usercard11.showdata()
    },
    addadmin() {
      this.modal1 = true
      this.loading = true
    },
    ok() {
      if (this.$store.state.user.userdata.length === 11) {
        this.loading = false
        this.modal1 = false
        this.$Message.info('添加失败！管理员数量已满')
      } else {
        this.$refs.adduser.submituser()

        setTimeout(() => {
          this.show()
          this.loading = false
          this.modal1 = false
          this.$Message.info('添加成功')
        }, 2000)
      }
    },
    cancel() {
      this.modal1 = false
    },
    updata(mes) {
      this.show()
    }
  },
  data() {
    return {
      userdata: [],
      modal1: false,
      loading: true,
      upfllag: -1
    }
  },
  mounted() {
    this.$nextTick(() => { })
  }
}
</script>
