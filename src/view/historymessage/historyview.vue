<template>
  <div>
    <Row>
      <Button
        type="primary"
        ghost
        @click="show"
      >查看</Button>
    </Row>
    <Row>
      <Col span="12">
      <history
        :headnum="t1"
        :headtime="time1"
        :flag1="viewflag"
        :begin="flag2"
      ></history>
      </Col>

      <Col
        span="11"
        offset="1"
      >
      <history
        :flag1="viewflag"
        :headnum="t2"
        :headtime="time1"
        :begin="flag2"
      ></history>
      </Col>
    </Row>
    <Row>
      <Col span="24">
      <p style="height: 80px"></p>
      </Col>
    </Row>
    <Row>
      <Col span="12">
      <history
        :flag1="viewflag"
        :headnum="t3"
        :headtime="time2"
        :begin="flag2"
      ></history>
      </Col>
      <Col
        span="11"
        offset="1"
      >
      <history
        :flag1="viewflag"
        :headnum="t4"
        :headtime="time2"
        :begin="flag2"
      ></history>
      </Col>
    </Row>
  </div>
</template>
<script>
import history from '@/components/table/history'
import { mapActions } from 'vuex'
export default {
  components: {
    history
  },
  data() {
    return {
      t1: 'A入口 车牌号',
      t2: 'A出口 车牌号',
      t3: 'B入口 车牌号',
      t4: 'B出口 车牌号',
      time1: '进入时间',
      time2: '离开时间',
      viewflag: false,
      flag2: 0
    }
  },
  methods: {
    ...mapActions(['gethistorydata']),
    show() {
      this.gethistorydata()
      this.flag2 = 1
      setTimeout(() => {
        this.viewflag = !this.viewflag
      }, 2500)
    }
  }
}
</script>
