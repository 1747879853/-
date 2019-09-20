<style lang="less">
@import './login.less';
</style>
<template>
  <div class="login">
    <button @click="fun()">test</button>
    <div class="login-con">
      <Card
        icon="log-in"
        title="欢迎登录小区车辆管理系统"
        :bordered="false"
      >
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '../../components/login-form/login-form'
import { mapActions } from 'vuex'
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit({ userName, password }) {
      this.handleLogin({ userName, password }).then(res => {
        this.getUserInfo().then(res => {
          if(this.$store.state.user.token==''){
            this.$Message.info('用户或密码不正确！')
          }else{
          this.$router.push({
            name: '_home'
          })
        }
        })
      })
    },
    fun() {
      this.$axios.get("/api/login").then( res =>{
            alert("success")
        }).catch(error =>{
          alert("error")
            console.log(error);
        });
    }
  }
}
</script>
