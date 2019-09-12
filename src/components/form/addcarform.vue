<template>
  <div>
    <Form
      :model="form"
      label-position="left"
      :label-width="100"
    >
      <FormItem label="车牌号">
        <Input v-model="form.carnum"></Input>
      </FormItem>
      <FormItem label="车辆颜色">
        <Input v-model="form.carcolor"></Input>
      </FormItem>
      <FormItem label="车辆类型">
        <Input v-model="form.carkind"></Input>
      </FormItem>
      <FormItem label="车主姓名">
        <Input v-model="form.mastername"></Input>
      </FormItem>
      <FormItem label="车主电话">
        <Input v-model="form.mastertel"></Input>
      </FormItem>
      <FormItem label="车主住址">
        <Input v-model="form.masteraddress"></Input>
      </FormItem>
      <FormItem label="车主身份证号">
        <Input v-model="form.masterid"></Input>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      form: {
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
  methods: {
    ...mapMutations(['addcardata']),
    submit() {
      this.addcardata(this.form)
      this.form = {
        masterid: '',
        mastername: '',
        carnum: '',
        masteraddress: '',
        mastertel: '',
        carcolor: '',
        carkind: ''
      }
    }
  }
}
</script>
