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
  function() {
        "use strict";
        var video, $output;
        var scale = 0.25;
        var initialize = function() {
            $output = $("#output");
            video = $("#video").get(0);
            $("#capture").click(captureImage);
        };
        var captureImage = function() {
            var canvas = document.createElement("canvas");
            canvas.width = video.videoWidth * scale;
            canvas.height = video.videoHeight * scale;
            canvas.getContext('2d')
                .drawImage(video, 0, 0, canvas.width, canvas.height);
            var img = document.createElement("img");
            img.src = canvas.toDataURL('image/png');
            $output.prepend(img);
        };
        $(initialize);
    }());

  fun(index) {
  },
  distinguish(index) {
    if(index===0){
      this.$refs['aplayerObj'].onPlayerPause()
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
