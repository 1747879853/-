<template>
  <div>
    <Form
      :model="form"
      label-position="left"
      :label-width="100"
    >
      <FormItem label="车牌号">
        <Input v-model="form.outcarnum"></Input>
      </FormItem>
      <FormItem label="车辆颜色">
        <Input v-model="form.outcarcolor"></Input>
      </FormItem>
      <FormItem label="车辆类型">
        <Input v-model="form.outcarkind"></Input>
      </FormItem>
      <FormItem label="车主姓名">
        <Input v-model="form.outmastername"></Input>
      </FormItem>
      <FormItem label="车主电话">
        <Input v-model="form.outmastertel"></Input>
      </FormItem>
      <FormItem label="进入时间">
        <Input v-model="form.intime"></Input>
      </FormItem>
      <FormItem label="离开时间">
        <Input v-model="form.outtime"></Input>
      </FormItem>
      <FormItem label="来客事由">
        <Input v-model="form.reason"></Input>
      </FormItem>
      <FormItem label="所收费用">
        <Input v-model="form.money"></Input>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  props: ['cardata'],
  data() {
    return {
      form: {
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
  methods: {
    ...mapMutations(['addOutcardata']),
    submit() {
      this.addOutcardata(this.form)
      this.form = {
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
  }
}
</script>
