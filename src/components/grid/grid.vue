<template>
  <div
    class="mytable"
    id="video"
  >
    <Row>
      <Col span="8">
      <Card style="height: 390px">
        <div style="text-align:center">
          <video-player ref="aplayerObj"></video-player>
        </div>
      </Card>
      </Col>
      <Col span="4">
      <cartablea></cartablea>
      </Col>
      <Col span="8">
      <Card style="height: 390px">
        <div style="text-align:center">
          <video-player ref="bplayerObj"></video-player>
        </div>
      </Card>
      </Col>
      <Col span="4">
      <cartableb></cartableb>
      </Col>
    </Row>
    <br />
    <Row>
      <Col span="8">
      <Card style="height: 390px">
        <div style="text-align:center">
          <video-player ref="cplayerObj"></video-player>
        </div>
      </Card>
      </Col>
      <Col span="4">
      <cartablec></cartablec>
      </Col>
      <Col span="8">
      <Card style="height: 390px">
        <div style="text-align:center">
          <video-player ref="dplayerObj"></video-player>
        </div>
      </Card>
      </Col>
      <Col span="4">
      <cartabled></cartabled>
      </Col>
    </Row>
  </div>
</template>
<script>
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer'
import cartablea from '@/components/table/tablea'
import cartableb from '@/components/table/tableb'
import cartablec from '@/components/table/tablec'
import cartabled from '@/components/table/tabled'
// document.getElementById("video").style.visibility = "visible";
export default {
  components: {
    VideoPlayer,
    cartablea,
    cartableb,
    cartablec,
    cartabled
  },
  data() {
    return {
    }
  },
  mounted() {
    this.$nextTick(() => {
     /* this.$refs['aplayerObj'].videoSrc =
        './assets/video/video2.mp4'
      this.$refs['aplayerObj'].playerOptions.sources[0].src =
        '../../assets/video/video2.mp4'
      /*this.$refs['bplayerObj'].videoSrc = '../../assets/video/video2.mp4'
      this.$refs['bplayerObj'].playerOptions.sources[0].src =
        './assets/video/video2.mp4'
      this.$refs['cplayerObj'].videoSrc = '../../assets/video/video1.mp4'
      this.$refs['cplayerObj'].playerOptions.sources[0].src =
        './assets/video/video2.mp4'
      this.$refs['dplayerObj'].videoSrc =
        '../../assets/video/video2.mp4'
      this.$refs['dplayerObj'].playerOptions.sources[0].src =
        './assets/video/video2.mp4'*/
    })
  },
  watch: {
    '$route'() {
      this.$destroy('VideoPlayer')
    }
  }
}
</script>
<style scoped>
.mytable /deep/ .ivu-table {
  font-size: 21px;
}
</style>
