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
          prefix="ios-contact"
          placeholder="Enter name"
          style="width: auto"
          v-model="userparam.username"
        />
        </Col>
      </Row>
      <Row>
        <Col span="6">
        <Tag color="geekblue">账号密码：</Tag>
        </Col>
        <Col span="18">
        <Input
          prefix="md-lock"
          placeholder="Enter name"
          style="width: auto"
          v-model="userparam.userpassword"
        />
        </Col>

      </Row>
      <Row>
        <Col span="6">

        <Tag color="geekblue">持 有 者 ：</Tag>
        </Col>
        <Col span="13">
        <Input
          prefix="md-person"
          placeholder="Enter name"
          style="width: auto"
          v-model="userparam.owner"
        />
        </Col>
        <Col
          span="3"
          offset="2"
        >

        </Col>

      </Row>
      <Row>
        <Col span="6">
        <Tag color="geekblue">电 话 号 ：</Tag>
        </Col>
        <Col span="13">
        <Input
          prefix="md-call"
          placeholder="Enter name"
          style="width: auto"
          v-model="userparam.ownertel"
        />
        </Col>
        <Col
          span="3"
          offset="2"
        >

        </Col>
      </Row>
    </Card>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  props: ['id'],
  data() {
    return {
      userparam: {
        username: ' ',
        userpassword: ' ',
        owner: ' ',
        ownertel: ' '
      }
    }
  },
  methods: {
    ...mapMutations(['adduserdata']),
    submituser() {
      this.adduserdata(this.userparam)
    }
  }
}
</script>
<style >
.card {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  height: 215px;
}
</style>
