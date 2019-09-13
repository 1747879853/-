<template>
  <div
    class="mytable"
    id="video"
  >
  <Row>
  <Col span="12">
  <input type="file" id="file0">
  <Button type="info" @click="fun(0)">确定</Button>
  </Col>
  <Col span="12">
  <input type="file" id="file1">
  <Button type="info" @click="fun(1)">确定</Button>
  </Col>
  </Row>
    <Row>
      <Col span="8">
      <Card style="height: 390px">
        <div style="text-align:center">
          <video-player ref="aplayerObj" id="1"></video-player>
        </div>
      </Card>
      </Col>
      <Col span="4">
      <Row>
      <cartablea></cartablea>
      </Row>
      <Row>
      <Col
      span="12">
      <Button type="info" @click="distinguish(0)">识别</Button>
      </Col>
      <Col
      span="12">
      <Button type="success" @click="adopt(0)">通过</Button>
      </Col>
      </Row>
      </Col>
      <Col span="8">
      <Card style="height: 390px">
        <div style="text-align:center">
          <video-player ref="bplayerObj"></video-player>
        </div>
      </Card>
      </Col>
      <Col span="4">
      <Row>
      <cartableb></cartableb>
      </Row>
      <Row>
      <Col
      span="12">
      <Button type="info" @click="distinguish(1)">识别</Button>
      </Col>
      <Col
      span="12">
      <Button type="success" @click="adopt(1)">通过</Button>
      </Col>
      </Row>
      </Col>
    </Row>
    <br />
    <Row>
  <Col span="12">
  <input type="file" id="file2">
  <Button type="info" @click="fun(2)">确定</Button>
  </Col>
  <Col span="12">
  <input type="file" id="file3">
  <Button type="info" @click="fun(3)">确定</Button>
  </Col>
  </Row>
    <Row>
      <Col span="8">
      <Card style="height: 390px">
        <div style="text-align:center">
          <video-player ref="cplayerObj"></video-player>
        </div>
      </Card>
      </Col>
      <Col span="4">
      <Row>
      <cartablec></cartablec>
      </Row>
      <Row>
      <Col
      span="12">
      <Button type="info" @click="distinguish(2)">识别</Button>
      </Col>
      <Col
      span="12">
      <Button type="success" @click="adopt(2)">通过</Button>
      </Col>
      </Row>
      </Col>
      <Col span="8">
      <Card style="height: 390px">
        <div style="text-align:center">
          <video-player ref="dplayerObj"></video-player>
        </div>
      </Card>
      </Col>
      <Col span="4">
      <Row>
      <cartabled></cartabled>
      </Row>
      <Row>
      <Col
      span="12">
      <Button type="info" @click="distinguish(3)">识别</Button>
      </Col>
      <Col
      span="12">
      <Button type="success" @click="adopt(3)">通过</Button>
      </Col>
      </Row>
      </Col>
    </Row>
    <canvas id="canvas"></canvas>
  </div>
</template>
<script charset="utf-8">
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer'
import cartablea from '@/components/table/tablea'
import cartableb from '@/components/table/tableb'
import cartablec from '@/components/table/tablec'
import cartabled from '@/components/table/tabled'
// document.getElementById("video").style.visibility = "visible";
export default {
  methods: {
  screen() {
        var canvas = document.getElementById('canvas');
       var video = this.$refs['aplayerObj']
       console.log('视频尺寸：'+video.style.width+'*'+video.style.height);
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
       console.log(canvas.width);
       console.log(canvas.height);
       var ctx = canvas.getContext('2d');
       ctx.drawImage(video, 0, 0,1920,1080);
       var base64 = canvas.toDataURL('images/png');
       
       },
  fun(index) {
    
    if(index===0){
      var file = document.getElementById('file0').files[0]
      var url = URL.createObjectURL(file)
      this.$refs['aplayerObj'].playerOptions.sources[0].src = url
    }
    if(index===1){
     var file = document.getElementById('file1').files[0]
      var url = URL.createObjectURL(file)
      this.$refs['bplayerObj'].playerOptions.sources[0].src = url
    }
    if(index===2){
      var file = document.getElementById('file2').files[0]
      var url = URL.createObjectURL(file)
      this.$refs['cplayerObj'].playerOptions.sources[0].src = url
    }
    if(index===3){
      var file = document.getElementById('file3').files[0]
      var url = URL.createObjectURL(file)
      this.$refs['dplayerObj'].playerOptions.sources[0].src = url;
    }
  },
  distinguish(index) {
    if(index===0){
      this.$refs['aplayerObj'].onPlayerPause()
      screen()
    }
    if(index===1){
      this.$refs['bplayerObj'].playerOptions.controlBar.playToggle = false
    }
    if(index===2){
      this.$refs['cplayerObj'].playerOptions.controlBar.playToggle = false
    }
    if(index===3){
      this.$refs['dplayerObj'].playerOptions.controlBar.playToggle = false
    }
  }
  },
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
