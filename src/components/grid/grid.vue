<template>
  <div class="mytable">
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
          <video id="video0" :src="videoSrc0" muted controls width="524px" height="368px">video</video>
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
           <video id="video1" :src="videoSrc1" muted controls width="524px" height="368px">video</video>
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
           <video id="video2" :src="videoSrc2" muted controls width="524px" height="368px">video</video>
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
           <video id="video3" :src="videoSrc3" muted controls width="524px" height="368px">video</video>
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
    <div>
    <canvas id="canvas" width="524" height="368" display="none" style="display:none">
    </canvas>
  </div>
  </div>
</template>
<script charset="utf-8">
import cartablea from '@/components/table/tablea'
import cartableb from '@/components/table/tableb'
import cartablec from '@/components/table/tablec'
import cartabled from '@/components/table/tabled'
export default {
  methods: {
    adopt(index) {
      if(index === 0){
        var video = document.getElementById('video0');
      }
      if(index === 1){
        var video = document.getElementById('video1');
      }
      if(index === 2){
        var video = document.getElementById('video2');
      }
      if(index === 3){
        var video = document.getElementById('video3');
      }
      video.play()
    },

    toImage(index) {
      if(index === 0){
        var video = document.getElementById('video0');
      }
      if(index === 1){
        var video = document.getElementById('video1');
      }
      if(index === 2){
        var video = document.getElementById('video2');
      }
      if(index === 3){
        var video = document.getElementById('video3');
      }
      var canvas = document.getElementById('canvas');
      console.log('视频尺寸：'+video.style.width+'*'+video.style.height);
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      console.log(canvas.width);
      console.log(canvas.height);
      var ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0,canvas.width,canvas.height);
      var base64 = canvas.toDataURL('images/png');
       //upload(base64)
    },
    sendUrl () {
　　　　// 如果图片需要formData格式,就自己组装一下,主要看后台需要什么参数
　　　   // const formData = new FormData()
　　　　// formData.append('base64', this.company.fileUrl)
　　　　// formData.append('userId', 123)
　　　　// formData.append('pathName', 'pdf')
　　　　this.$ajax({
　　　　　　url: apiPath.common.uploadBase,
　　　　　　method: 'post',
　　　　　　data: this.htmlUrl
　　　　}).then(res => {
　　　　　　if (res.code && res.data) {
 
　　　　　　}
　　　　})
　　},
    fun(index) {
      if(index===0){
        var file = document.getElementById('file0').files[0]
        var url = URL.createObjectURL(file)
        this.videoSrc0=url
      }
      if(index===1){
       var file = document.getElementById('file1').files[0]
        var url = URL.createObjectURL(file)
        this.videoSrc1=url
      }
      if(index===2){
        var file = document.getElementById('file2').files[0]
        var url = URL.createObjectURL(file)
        this.videoSrc2=url
      }
      if(index===3){
        var file = document.getElementById('file3').files[0]
        var url = URL.createObjectURL(file)
        this.videoSrc3=url
      }
    },
    distinguish(index) {
      if(index===0){
        let myVideo = document.getElementById("video0");
        myVideo.pause()
        this.$options.methods.toImage(index)
        
      }
      if(index===1){
        let myVideo = document.getElementById("video1");
        myVideo.pause()
        this.$options.methods.toImage(index)
      }
      if(index===2){
        let myVideo = document.getElementById("video2");
        myVideo.pause()
        this.$options.methods.toImage(index)
      }
      if(index===3){
        let myVideo = document.getElementById("video3");
        myVideo.pause()
        this.$options.methods.toImage(index)
      }
    }
    },
    components: {
      cartablea,
      cartableb,
      cartablec,
      cartabled
    },
  data() {
    return {
    src:'',
    htmlUrl: '',
    videoSrc0:'',
    videoSrc1:'',
    videoSrc2:'',
    videoSrc3:'',
    }
  },
  mounted() {
    this.$nextTick(() => {
    })
  },
  watch: {
    '$route'() {
      //this.$destroy('VideoPlayer')
    }
  }
}
</script>
<style scoped>
.mytable /deep/ .ivu-table {
  font-size: 21px;
}
</style>
