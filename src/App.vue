<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
*,
:after,
:before {
  box-sizing: border-box;
}
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
