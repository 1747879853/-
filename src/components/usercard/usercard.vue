<template>
  <div class="mycard">
    <Card
      bordered
      class="card"
    >
      <p slot="title">管理员</p>

      <Row>
        <Col span="6">
        <Tag color="geekblue">用 户 名 ：</Tag>
        </Col>
        <Col span="18">
        <Input
          :disabled="true"
          prefix="ios-contact"
          placeholder=""
          style="width: auto"
          v-model="userparam.username"
        />
        </Col>
      </Row>
      <Row>
        <Col span="6">
        <Tag color="geekblue">账号密码：</Tag>
        </Col>
        <Col span="13">
        <Input
          :disabled="isdisable"
          prefix="md-lock"
          placeholder=""
          style="width: auto"
          v-model="userparam.userpassword"
        />
        </Col>
        <Col
          span="3"
          offset="2"
        >
        <Button
          type="error"
          ghost
          @click="delet"
        >删除</Button>
        </Col>

      </Row>
      <Row>
        <Col span="6">

        <Tag color="geekblue">持 有 者 ：</Tag>
        </Col>
        <Col span="13">
        <Input
          :disabled="isdisable"
          prefix="md-person"
          placeholder=""
          style="width: auto"
          v-model="userparam.owner"
        />
        </Col>
        <Col
          span="3"
          offset="2"
        >
        <Button
          type="primary"
          ghost
          @click="edit"
        >编辑</Button>
        </Col>

      </Row>
      <Row>
        <Col span="6">
        <Tag color="geekblue">电 话 号 ：</Tag>
        </Col>
        <Col span="13">
        <Input
          :disabled="isdisable"
          prefix="md-call"
          placeholder=""
          style="width: auto"
          v-model="userparam.ownertel"
        />
        </Col>
        <Col
          span="3"
          offset="2"
        >
        <Button
          type="primary"
          ghost
          @click="submit"
        >提交</Button>
        </Col>
      </Row>
    </Card>
  </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  props: ['id'],
  data() {
    return {
      userparam: {
        username: ' ',
        userpassword: ' ',
        owner: ' ',
        ownertel: ' '
      },
      isdisable: true,
      eidted: 0,
      showed: 0,
      sucflag: 0
    }
  },
  methods: {
    ...mapMutations(['fixuserdata', 'deletuserdata']),
    ...mapActions(['getuserdata']),
    submit() {
      console.log(this.userparam)
      this.fixuserdata(this.userparam)
      this.showdata()
      setTimeout(() => {
        if (this.eidted === 1) {
          this.$Message.info('修改成功')
        }
      }, 1000)
      this.isdisable = true
    },
    showdata() {
      this.getuserdata()
      setTimeout(() => {
        try {
          this.userparam.username = this.$store.state.user.userdata[this.id].username
          this.userparam.userpassword = this.$store.state.user.userdata[this.id].userpassword
          this.userparam.owner = this.$store.state.user.userdata[this.id].owner
          this.userparam.ownertel = this.$store.state.user.userdata[this.id].ownertel
          this.showed = 1
        } catch (error) {
          console.log('空操作error')
          this.userparam.username = ''
          this.userparam.userpassword = ''
          this.userparam.owner = ''
          this.userparam.ownertel = ''
        }
      }, 2100)
    },
    edit() {
      this.isdisable = false
      this.eidted = 1
    },
    delet() {
      if (this.showed === 1 && this.userparam.username != null) {
        this.deletuserdata(this.userparam.username)
        setTimeout(() => {
          this.getuserdata()
        }, 2000)
        setTimeout(() => {
          try {
            this.userparam.username = this.$store.state.user.userdata[this.id].username
            this.userparam.userpassword = this.$store.state.user.userdata[this.id].userpassword
            this.userparam.owner = this.$store.state.user.userdata[this.id].owner
            this.userparam.ownertel = this.$store.state.user.userdata[this.id].ownertel
            this.$Message.info('删除成功')
            this.$emit('success', this.sucflag)
            this.sucflag += this.sucflag
          } catch (error) {
            console.log('空操作error')
          }
        }, 3000)
      } else {
        this.$Message.info('删除失败,用户不存在')
      }
    }
  }
}
</script>
<style >
.card {
  background-color: #f8f8f9;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  height: 215px;
}
.ivu-input[disabled] {
  background-color: white;
}
</style>
